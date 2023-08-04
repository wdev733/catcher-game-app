import { useMemo } from 'react';

import { gameConfig } from 'shared/configs/game';
import style from 'ui/game/components/Boat.module.scss';

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
