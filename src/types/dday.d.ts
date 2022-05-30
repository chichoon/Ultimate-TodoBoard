export interface IDDay {
  type: 'dday';
  items: IDDayItem[];
}

export interface IDDayItem {
  ddayTitle: string;
  ddayDate: string;
  emoji: string;
}
