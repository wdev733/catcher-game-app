import { useEffect, useState } from 'react';

import { gameConfig } from 'shared/configs/game';
import useAsset from 'shared/hooks/useAsset';
import useInterval from 'shared/hooks/useInterval';
import useMoveBoat from 'shared/hooks/useMoveBoat';
import Boat from 'containers/game/components/Boat';
import style from 'containers/game/play/Playground.module.scss';

import Asset from '../components/Asset';

import { AssetPack, GameStatus } from 'shared/configs/game';

interface PlaygroundProps {
  gameStatus: GameStatus;
  onUpdateScore: (score: number) => void;
}

const Playground = ({ gameStatus, onUpdateScore }: PlaygroundProps) => {
  const { position: boatPosition, handleKeyDown } = useMoveBoat({});
  const { generateRandomAssetPack } = useAsset();

  const [assets, setAssets] = useState<AssetPack[]>([generateRandomAssetPack()]);

  useInterval(
    () => {
      const asset = generateRandomAssetPack();
      setAssets([...assets, asset]);
    },
    gameStatus === GameStatus.Playing ? gameConfig.playground.assetGenerateFrequency : null,
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (gameStatus === GameStatus.Ended) {
      setAssets([]);
    }
  }, [gameStatus]);

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
          isPlaying={gameStatus === GameStatus.Playing}
        />
      ))}
      <Boat position={boatPosition} />
    </div>
  );
};

export default Playground;
