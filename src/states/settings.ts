import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { RootState } from 'states';
import { IWeather, ISettingsInformation } from 'types/settings.d';

export const INIT_SETTINGS: ISettingsInformation = {
  nickname: 'unknown',
  theme: 'lightblue',
  weather: {
    lat: 0,
    lon: 0,
  },
  githubID: '',
  solvedacID: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: INIT_SETTINGS,
  reducers: {
    resetSettings: () => INIT_SETTINGS,
    setNickname: (state: ISettingsInformation, action: PayloadAction<string>) => {
      state.nickname = action.payload;
      store.set('settingsData', state);
    },
    setTheme: (state: ISettingsInformation, action: PayloadAction<'lightblue' | 'darkblue'>) => {
      state.theme = action.payload;
      store.set('settingsData', state);
      document.documentElement.setAttribute('color-theme', action.payload);
    },
    setGithubID: (state: ISettingsInformation, action: PayloadAction<string>) => {
      state.githubID = action.payload;
      store.set('settingsData', state);
    },
    setLatitude: (state: ISettingsInformation, action: PayloadAction<number>) => {
      state.weather.lat = action.payload;
      store.set('settingsData', state);
    },
    setLongitude: (state: ISettingsInformation, action: PayloadAction<number>) => {
      state.weather.lon = action.payload;
      store.set('settingsData', state);
    },
    setSolvedacID: (state: ISettingsInformation, action: PayloadAction<string>) => {
      state.solvedacID = action.payload;
      store.set('settingsData', state);
    },
  },
});

export const { setNickname, setTheme, setGithubID, setLatitude, setLongitude, setSolvedacID } = settingsSlice.actions;

export default settingsSlice.reducer;

export const getNickname = (state: RootState): string => state.settings.nickname;

export const getTheme = (state: RootState): 'lightblue' | 'darkblue' => state.settings.theme;

export const getWeather = (state: RootState): IWeather => state.settings.weather;

export const getGithubID = (state: RootState): string => state.settings.githubID;

export const getSolvedacID = (state: RootState): string => state.settings.solvedacID;
