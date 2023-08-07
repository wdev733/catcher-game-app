import { useState } from 'react';

import GameOverModal from 'containers/game/modals/GameOverModal';
import style from 'containers/game/play/index.module.scss';
import Playground from 'containers/game/play/Playground';
import Status from 'containers/game/play/Status';
import { useRouter } from 'next/router';
import usePostScore from 'services/catcher/usePostScore';
import { GameStatus, gameConfig } from 'shared/configs/game';
import { StaticLink } from 'shared/configs/links';
import useInterval from 'shared/hooks/useInterval';
import useSingleForm from 'shared/hooks/useSingleForm';

import SubmitScoreSuccessModal from '../modals/SubmitScoreSuccessModal';

import type { FormikValues } from 'formik';
import type { CreateUserDto } from 'services/catcher/api';

export const GamePlay = () => {
  const router = useRouter();

  const { postScore, isLoading: isSubmittingScore } = usePostScore();

  const [time, setTime] = useState(gameConfig.gameDuration);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.Ended);

  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [showSubmitScoreSuccessModal, setShowSubmitScoreSuccessModal] = useState(false);

  const { formValues, showErrors, handleUpdateForm, handleResetForm, handleValidateForm } = useSingleForm();

  useInterval(() => {
    if (time === 0) {
      setGameStatus(GameStatus.Ended);
      setShowGameOverModal(true);
      return;
    }

    setGameStatus(GameStatus.Playing);

    setTime(time - 1);
  }, 1000);

  const handleSubmitScore = async () => {
    const couldSave = handleValidateForm();
    if (!couldSave) return;

    await postScore({
      ...(formValues as CreateUserDto),
      score,
    });

    handleResetForm();

    setShowGameOverModal(false);
    setShowSubmitScoreSuccessModal(true);
  };

  const handleUpdateScore = (acquiredScore) => {
    setScore(score + acquiredScore);
  };

  const handlePlayAgain = () => {
    setTime(gameConfig.gameDuration);
    setShowGameOverModal(false);
    setShowSubmitScoreSuccessModal(false);
  };

  const handleGotoRank = () => {
    router.push(StaticLink.Rank);
  };

  const handleGotoHome = () => {
    router.push(StaticLink.Home);
  };

  return (
    <div className={style.container}>
      <div className={style.gameContainer}>
        <Status time={time} score={score} />
        <Playground onUpdateScore={handleUpdateScore} gameStatus={gameStatus} />
      </div>

      <GameOverModal
        show={showGameOverModal}
        score={score}
        isSubmittingScore={isSubmittingScore}
        onRegisterScore={handleSubmitScore}
        onPlayAgain={handlePlayAgain}
        onExit={handleGotoHome}
        showErrors={showErrors}
        initialValues={{} as FormikValues}
        onUpdate={handleUpdateForm}
      />

      <SubmitScoreSuccessModal
        show={showSubmitScoreSuccessModal}
        onPlayAgain={handlePlayAgain}
        onGotoRankPage={handleGotoRank}
        onExit={handleGotoHome}
      />
    </div>
  );
};
