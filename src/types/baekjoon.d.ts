export interface IBaekjoon {
  type: 'baekjoon';
  items: IBaekjoonItem[];
}

export interface IBaekjoonItem {
  problem: string;
  tier: number;
}
