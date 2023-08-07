import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import style from 'containers/game/modals/GameOverModal.module.scss';

import type { ModalProps } from 'components/Modal';
import { useFormik } from 'formik';
import { userPostScoreSchema } from 'shared/configs/schemas';
import { useEffect } from 'react';
import { FormInput } from 'components/Form';

export interface FormValue {
  userName?: string;
}

interface GameOverModalProps extends ModalProps {
  score: number;
  showErrors: boolean;
  initialValues: FormValue;
  isSubmittingScore?: boolean;
  onUpdate: (values: FormValue, errors: object) => void;
  onRegisterScore: () => void;
  onPlayAgain: () => void;
  onExit: () => void;
}

const GameOverModal = ({
  show,
  score,
  onRegisterScore,
  onPlayAgain,
  onExit,
  isSubmittingScore,
  showErrors,
  initialValues,
  onUpdate,
}: GameOverModalProps) => {
  const formik = useFormik({
    validationSchema: userPostScoreSchema,
    initialValues,
    validateOnMount: false,
    enableReinitialize: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  useEffect(() => {
    onUpdate(formik.values, formik.errors);
  }, [formik.values, formik.errors, onUpdate]);

  return (
    <Modal show={show} className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>GAME OVER</h2>
        <h3 className={style.subTitle}>{`YOUR SCORE IS ${score}`}</h3>
        <div className={style.formWrapper}>
          <FormInput
            stacked
            placeholder="Your User name"
            value={formik.values.userName ?? ''}
            error={formik.errors.userName}
            showErrors={showErrors}
            onChange={async (val) => formik.setFieldValue('userName', val)}
          />
        </div>
        <div className={style.buttonWrapper}>
          <Button onClick={onRegisterScore} disabled={isSubmittingScore}>
            Submit Score
          </Button>
          <Button variant="secondary" onClick={onPlayAgain}>
            Play Again
          </Button>
          <Button variant="secondary" onClick={onExit}>
            Exit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default GameOverModal;
