import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { IDDay, IInformation, IBaekjoonItem } from 'types/information.d';
import { ddaySort } from 'utils/infoUtils';

import { RootState } from 'states';

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
    setInfo: (state: IInformation, action: PayloadAction<IInformation>) => action.payload,
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

export const { setInfo, addBaekjoon, deleteBaekjoon, addDDay, deleteDday } = informationSlice.actions;

export default informationSlice.reducer;

export const getBaekjoonItems = (state: RootState): IBaekjoonItem[] => state.information.baekjoon;

export const getDDays = (state: RootState): IDDay[] => state.information.dday;
