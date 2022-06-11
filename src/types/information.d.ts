export interface IInformation {
  baekjoon: IBaekjoonItem[];
  dday: IDDay[];
  shortcut: IShortcut[];
}
export interface IBaekjoonItem {
  id: number;
  problem: string;
  tier: number;
}
export interface IDDay {
  title: string;
  icon: string;
  date: string;
  color: string;
}

export interface IError {
  status: number;
  data: string;
}

export interface IShortcut {
  title: string;
  url: string;
}
