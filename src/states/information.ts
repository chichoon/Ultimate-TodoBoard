import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { IDDay, IInformation, IBaekjoonItem, IWeather, IShortcut } from 'types/information.d';
import { ddaySort, INIT_INFO } from 'utils/infoUtils';

import { RootState } from 'states';

const informationSlice = createSlice({
  name: 'information',
  initialState: INIT_INFO,
  reducers: {
    setInfo: (state: IInformation, action: PayloadAction<IInformation>) => action.payload,
    resetInfo: () => INIT_INFO,
    setNickname: (state: IInformation, action: PayloadAction<string>) => {
      state.nickname = action.payload;
      store.set('infoData', state);
    },
    setTheme: (state: IInformation, action: PayloadAction<'lightblue' | 'darkblue'>) => {
      state.theme = action.payload;
      store.set('infoData', state);
      document.documentElement.setAttribute('color-theme', action.payload);
    },
    setGithubID: (state: IInformation, action: PayloadAction<string>) => {
      state.githubID = action.payload;
      store.set('infoData', state);
    },
    setWeather: (state: IInformation, action: PayloadAction<IWeather>) => {
      state.weather = action.payload;
      store.set('infoData', state);
    },
    addBaekjoon: (state: IInformation, action: PayloadAction<IBaekjoonItem>) => {
      state.baekjoon = [...state.baekjoon, action.payload].sort((a, b) => a.tier - b.tier);
      store.set('infoData', state);
    },
    deleteBaekjoon: (state: IInformation, action: PayloadAction<number>) => {
      state.baekjoon = state.baekjoon.filter((_, index) => index !== action.payload);
      store.set('infoData', state);
    },
    addDDay: (state: IInformation, action: PayloadAction<IDDay>) => {
      state.dday = [...state.dday, action.payload].sort(ddaySort);
      store.set('infoData', state);
    },
    deleteDday: (state: IInformation, action: PayloadAction<number>) => {
      state.dday = state.dday.filter((_, index) => index !== action.payload);
      store.set('infoData', state);
    },
    addShortcut: (state: IInformation, action: PayloadAction<IShortcut>) => {
      state.shortcut = [...state.shortcut, action.payload];
      store.set('infoData', state);
    },
    deleteShortcut: (state: IInformation, action: PayloadAction<number>) => {
      state.shortcut = state.shortcut.filter((_, index) => index !== action.payload);
      store.set('infoData', state);
    },
    resetBaekjoon: (state: IInformation) => {
      state.baekjoon = [];
      store.set('infoData', state);
    },
    resetDDay: (state: IInformation) => {
      state.dday = [];
      store.set('infoData', state);
    },
    resetShortcut: (state: IInformation) => {
      state.shortcut = [];
      store.set('infoData', state);
    },
  },
});

export const {
  setInfo,
  resetInfo,
  setNickname,
  setTheme,
  setGithubID,
  setWeather,
  addBaekjoon,
  deleteBaekjoon,
  addDDay,
  deleteDday,
  addShortcut,
  deleteShortcut,
  resetBaekjoon,
  resetDDay,
  resetShortcut,
} = informationSlice.actions;

export default informationSlice.reducer;

export const getInformations = (state: RootState): IInformation => state.information;

export const getBaekjoonItems = (state: RootState): IBaekjoonItem[] => state.information.baekjoon;

export const getDDays = (state: RootState): IDDay[] => state.information.dday;

export const getNickname = (state: RootState): string => state.information.nickname;

export const getTheme = (state: RootState): 'lightblue' | 'darkblue' => state.information.theme;

export const getWeather = (state: RootState): IWeather => state.information.weather;

export const getGithubID = (state: RootState): string => state.information.githubID;

export const getShortcut = (state: RootState): IShortcut[] => state.information.shortcut;
