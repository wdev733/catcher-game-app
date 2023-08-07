import style from 'containers/ranks/RankerTable.module.scss';

import type { User } from 'services/catcher/useGetTop100Rankers';

interface RankerTableProps {
  data: User[];
}

const RankerTable = ({ data }: RankerTableProps) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.row}>
          <div className={style.rank}>Rank</div>
          <div className={style.username}>Name</div>
          <div className={style.score}>Score</div>
        </div>
      </div>
      <div className={style.content}>
        {data.map((item, idx) => (
          <div key={item.id} className={style.row}>
            <div className={style.rank}>{idx + 1}</div>
            <div className={style.username}>{item.userName}</div>
            <div className={style.score}>{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankerTable;
