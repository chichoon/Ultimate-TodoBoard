import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { IDDay, IInformation, IBaekjoonItem } from 'types/information.d';
import { ddaySort } from 'utils/infoUtils';

import { RootState } from 'states';

const INIT_INFO: IInformation = {
  nickname: 'unknown',
  theme: 'lightblue',
  baekjoon: [],
  weather: {
    locationName: '',
    lat: 0,
    lon: 0,
  },
  dday: [],
  githubID: '',
};

const informationSlice = createSlice({
  name: 'information',
  initialState: INIT_INFO,
  reducers: {
    setInfo: (state: IInformation, action: PayloadAction<IInformation>) => action.payload,
    setNickname: (state: IInformation, action: PayloadAction<string>) => {
      const newData = {
        ...state,
        nickname: action.payload,
      };
      store.set('infoData', newData);
      return newData;
    },
    setTheme: (state: IInformation, action: PayloadAction<'lightblue' | 'darkblue'>) => {
      const newData = {
        ...state,
        theme: action.payload,
      };
      store.set('infoData', newData);
      return newData;
    },
    addBaekjoon: (state: IInformation, action: PayloadAction<IBaekjoonItem>) => {
      const newData = {
        ...state,
        baekjoon: [...state.baekjoon, action.payload].sort((a, b) => a.tier - b.tier),
      };
      store.set('infoData', newData);
      return newData;
    },
    deleteBaekjoon: (state: IInformation, action: PayloadAction<number>) => {
      const newData = {
        ...state,
        baekjoon: state.baekjoon.filter((_, index) => index !== action.payload),
      };
      store.set('infoData', newData);
      return newData;
    },
    addDDay: (state: IInformation, action: PayloadAction<IDDay>) => {
      const newData = {
        ...state,
        dday: [...state.dday, action.payload].sort(ddaySort),
      };
      store.set('infoData', newData);
      return newData;
    },
    deleteDday: (state: IInformation, action: PayloadAction<number>) => {
      const newData = {
        ...state,
        dday: state.dday.filter((_, index) => index !== action.payload),
      };
      store.set('infoData', newData);
      return newData;
    },
  },
});

export const { setNickname, setTheme, setInfo, addBaekjoon, deleteBaekjoon, addDDay, deleteDday } =
  informationSlice.actions;

export default informationSlice.reducer;

export const getInformations = (state: RootState): IInformation => state.information;

export const getBaekjoonItems = (state: RootState): IBaekjoonItem[] => state.information.baekjoon;

export const getDDays = (state: RootState): IDDay[] => state.information.dday;

export const getNickname = (state: RootState): string => state.information.nickname;

export const getTheme = (state: RootState): string => state.information.theme;
