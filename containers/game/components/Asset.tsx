import { useEffect, useState } from 'react';

import style from 'containers/game/components/Asset.module.scss';
import { gameConfig } from 'shared/configs/game';
import useInterval from 'shared/hooks/useInterval';
import numberTool from 'shared/tools/number';

import type { AssetPack, Position } from 'shared/configs/game';

interface AssetProps {
  isPlaying: boolean;
  assetType: AssetPack;
  boatPosition: Position;
  onDestroy: (id: string | number | undefined, getAcquired: boolean) => void;
}

const Asset = ({ isPlaying, assetType, boatPosition, onDestroy }: AssetProps) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setLeft(numberTool.getRandomInt(0, gameConfig.playground.width - 49));
  }, []);

  useInterval(
    () => {
      const newTopPosition = top + gameConfig.asset.moveSpeed;

      const boatPositionLeft = boatPosition.left ?? 0;
      // if this assets Y position is below Boat Y position
      if (newTopPosition > gameConfig.playground.height - gameConfig.boat.width * gameConfig.boat.heightRatio) {
        /**
         * below 2 conditions to check the boat and asset are crashed
         */
        if (boatPositionLeft > left && boatPositionLeft < left + gameConfig.asset.width) {
          onDestroy(assetType.id, true);
          return;
        }

        if (left > boatPositionLeft && left < boatPositionLeft + gameConfig.boat.width) {
          onDestroy(assetType.id, true);
          return;
        }
      }

      // if this assets is move to bottom of screen
      if (newTopPosition >= gameConfig.playground.height - gameConfig.asset.width) {
        onDestroy(assetType.id, false);
        return;
      }

      setTop(newTopPosition);
    },
    isPlaying ? gameConfig.asset.moveFrequency : null,
  );

  return (
    <img
      src={assetType.image}
      className={style.container}
      style={{
        width: `${gameConfig.asset.width}px`,
        height: `${gameConfig.asset.width}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    />
  );
};

export default Asset;
