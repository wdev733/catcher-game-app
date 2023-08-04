import { useState } from 'react';

import { gameConfig } from 'shared/configs/game';
import useInterval from 'shared/hooks/useInterval';
import style from 'ui/game/play/index.module.scss';
import Playground from 'ui/game/play/Playground';
import Status from 'ui/game/play/Status';

export const GamePlay = () => {
  const [time, setTime] = useState(gameConfig.gameDuration);
  const [score, setScore] = useState(0);

  useInterval(() => {
    if (time === 0) {
      return;
    }

    setTime(time - 1);
  }, 1000);

  const handleUpdateScore = (acquiredScore) => {
    setScore(score + acquiredScore);
  };

  return (
    <div className={style.container}>
      <div className={style.gameContainer}>
        <Status time={time} score={score} />
        <Playground onUpdateScore={handleUpdateScore} isPlaying={time > 0} />
      </div>
    </div>
  );
};
