import { useState } from 'react';

import { gameConfig } from 'shared/configs/game';

import type { Position } from 'shared/configs/game';

interface useMoveBoatProps {
  playgroundWidth?: number;
}

const moveSpeed = gameConfig.boat.moveSpeed;

const useMoveBoat = ({ playgroundWidth = 320 }: useMoveBoatProps) => {
  const boatWidth = Math.max(playgroundWidth / 5, 64);

  const [boatPosition, setBoatPosition] = useState<Position>({ left: 0, bottom: 0, right: 0 });

  const handleKeyDown = ({ keyCode }) => {
    let left = boatPosition.left ?? 0;

    // Left, A
    if (keyCode === 37 || keyCode === 65) {
      left = left - moveSpeed < 0 ? 0 : left - moveSpeed;

      setBoatPosition({
        ...boatPosition,
        left,
      });
    }

    // Right, D
    if (keyCode === 39 || keyCode === 68) {
      left = left + moveSpeed + boatWidth > playgroundWidth ? playgroundWidth - boatWidth : left + moveSpeed;

      setBoatPosition({
        ...boatPosition,
        left,
      });
    }
  };

  return {
    position: boatPosition,
    handleKeyDown,
  };
};

export default useMoveBoat;
