export interface Position {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface GameConfig {
  gameDuration: number;
  playground: {
    width: number;
    height: number;
    assetGenerateFrequency: number;
  };
  boat: {
    moveSpeed: number;
    width: number;
    heightRatio: number;
  };
  asset: {
    width: number;
    moveSpeed: number;
    moveFrequency: number;
  };
}

export const gameConfig: GameConfig = {
  gameDuration: 20,
  playground: {
    width: 320,
    height: 640,
    assetGenerateFrequency: 1000,
  },
  boat: {
    moveSpeed: 30,
    width: 64,
    heightRatio: 1.225625,
  },
  asset: {
    width: 50,
    moveSpeed: 20,
    moveFrequency: 100,
  },
};

export type AssetPackType = 'p1' | 'p2' | 'p3' | 'p4' | 'e1' | 'e2';

export interface AssetPack {
  id?: string | number;
  type: AssetPackType;
  image: string;
  score: number;
}

export const assetPacks: AssetPack[] = [
  {
    type: 'p1',
    image: '/assets/p1.png',
    score: 50,
  },
  {
    type: 'p2',
    image: '/assets/p2.png',
    score: 50,
  },
  {
    type: 'p3',
    image: '/assets/p3.png',
    score: 50,
  },
  {
    type: 'p4',
    image: '/assets/p4.png',
    score: 50,
  },
  {
    type: 'e1',
    image: '/assets/e1.png',
    score: -100,
  },
  {
    type: 'e2',
    image: '/assets/e2.png',
    score: -100,
  },
];
