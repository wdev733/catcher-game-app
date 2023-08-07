import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import style from 'containers/game/modals/GameOverModal.module.scss';

import type { ModalProps } from 'components/Modal';

interface SubmitScoreSuccessModalProps extends ModalProps {
  onPlayAgain: () => void;
  onGotoRankPage: () => void;
  onExit: () => void;
}

const SubmitScoreSuccessModal = ({ show, onPlayAgain, onGotoRankPage, onExit }: SubmitScoreSuccessModalProps) => (
  <Modal show={show} className={style.container}>
    <div className={style.content}>
      <h2 className={style.title}>YOUR SCORE IS SUCCSSFULLY SUBMITTED</h2>
      <div className={style.buttonWrapper}>
        <Button onClick={onPlayAgain}>Play Again</Button>
        <Button onClick={onGotoRankPage} variant="secondary">
          Ranks
        </Button>
        <Button onClick={onExit} variant="secondary">
          Exit
        </Button>
      </div>
    </div>
  </Modal>
);

export default SubmitScoreSuccessModal;
