import { atom } from 'recoil';

const todayDateState = atom<string>({
  key: 'todayDateState',
  default: '1900-01-01',
});

export default todayDateState;
