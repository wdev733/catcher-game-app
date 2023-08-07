import { useMemo } from 'react';

import style from 'containers/game/components/Boat.module.scss';
import { gameConfig } from 'shared/configs/game';

import type { Position } from 'shared/configs/game';

interface BoatProps {
  width?: number;
  position: Position;
}

const Boat = ({ width = gameConfig.boat.width, position }: BoatProps) => {
  const customStyle = useMemo(() => {
    const res = {
      left: '0px',
      bottom: '0px',
      width: `${width}px`,
    };

    const { bottom, left } = position;
    if (bottom) {
      res.bottom = `${bottom}px`;
    }

    if (left) {
      res.left = `${left}px`;
    }

    return res;
  }, [position]);

  return <img src="/assets/boat.png" className={style.container} style={customStyle} />;
};

export default Boat;
