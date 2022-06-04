import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { IDDay, IInformation, IBaekjoonItem, IWeather, IShortcut } from 'types/information.d';
import { ddaySort } from 'utils/infoUtils';

import { RootState } from 'states';

const INIT_INFO: IInformation = {
  nickname: 'unknown',
  theme: 'lightblue',
  baekjoon: [],
  weather: {
    lat: 0,
    lon: 0,
  },
  dday: [],
  shortcut: [],
  githubID: '',
};

const informationSlice = createSlice({
  name: 'information',
  initialState: INIT_INFO,
  reducers: {
    setInfo: (state: IInformation, action: PayloadAction<IInformation>) => action.payload,
    resetInfo: () => INIT_INFO,
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
    setGithubID: (state: IInformation, action: PayloadAction<string>) => {
      const newData = {
        ...state,
        githubID: action.payload,
      };
      store.set('infoData', newData);
      return newData;
    },
    setWeather: (state: IInformation, action: PayloadAction<IWeather>) => {
      const newData = {
        ...state,
        weather: action.payload,
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
    addShortcut: (state: IInformation, action: PayloadAction<IShortcut>) => {
      const newData = {
        ...state,
        shortcut: [...state.shortcut, action.payload],
      };
      store.set('infoData', newData);
      return newData;
    },
    deleteShortcut: (state: IInformation, action: PayloadAction<number>) => {
      const newData = {
        ...state,
        shortcut: state.shortcut.filter((_, index) => index !== action.payload),
      };
      store.set('infoData', newData);
      return newData;
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
