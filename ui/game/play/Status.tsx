import style from 'ui/game/play/Status.module.scss';

interface StatusProps {
  time: number;
  score: number;
}

const Status = ({ time, score }: StatusProps) => {
  return (
    <div className={style.container}>
      <div className={style.time}>{`Time: ${time}`}</div>
      <div className={style.score}>{`Score: ${score}`}</div>
    </div>
  );
};

export default Status;
