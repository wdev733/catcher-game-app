import { useEffect, useState } from 'react';

import { gameConfig } from 'shared/configs/game';
import useAsset from 'shared/hooks/useAsset';
import useInterval from 'shared/hooks/useInterval';
import useMoveBoat from 'shared/hooks/useMoveBoat';
import Boat from 'ui/game/components/Boat';
import style from 'ui/game/play/Playground.module.scss';

import Asset from '../components/Asset';

import type { AssetPack } from 'shared/configs/game';

interface PlaygroundProps {
  isPlaying: boolean;
  onUpdateScore: (score: number) => void;
}

const Playground = ({ isPlaying, onUpdateScore }: PlaygroundProps) => {
  const { position: boatPosition, handleKeyDown } = useMoveBoat({});
  const { generateRandomAssetPack } = useAsset();

  const [assets, setAssets] = useState<AssetPack[]>([generateRandomAssetPack()]);

  useInterval(
    () => {
      const asset = generateRandomAssetPack();
      setAssets([...assets, asset]);
    },
    isPlaying ? gameConfig.playground.assetGenerateFrequency : null,
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleDestroyAsset = (id, getAcquired) => {
    const findIndex = assets.findIndex((asset) => asset.id === id);

    if (getAcquired) {
      onUpdateScore(assets[findIndex].score);
    }

    if (findIndex >= 0) {
      const newAssets = [...assets];
      newAssets.splice(findIndex, 1);
      setAssets(newAssets);
    }
  };

  return (
    <div className={style.container}>
      {assets.map((asset) => (
        <Asset
          key={asset.id}
          assetType={asset}
          boatPosition={boatPosition}
          onDestroy={handleDestroyAsset}
          isPlaying={isPlaying}
        />
      ))}
      <Boat position={boatPosition} />
    </div>
  );
};

export default Playground;
