import { RootState } from 'states';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { IInformation, IBaekjoonItem } from '../types/information.d';

const INIT_INFO: IInformation = {
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
  },
});

export const { addBaekjoon, deleteBaekjoon } = informationSlice.actions;

export default informationSlice.reducer;

export const getBaekjoonItems = (state: RootState): IBaekjoonItem[] => state.information.baekjoon;
