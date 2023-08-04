import { assetPacks } from 'shared/configs/game';
import numberTool from 'shared/tools/number';

const useAsset = () => {
  const generateRandomAssetPack = () => {
    const num = numberTool.getRandomInt() % assetPacks.length;
    return {
      id: new Date().getTime(),
      ...assetPacks[num],
    };
  };

  return {
    generateRandomAssetPack,
  };
};

export default useAsset;
