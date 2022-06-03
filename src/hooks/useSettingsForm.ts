import { getWeather } from '../states/information';
import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { getGithubID, getTheme, setNickname, getNickname, setTheme, setWeather, setGithubID } from 'states/information';
import { useAppSelector } from 'hooks';

export const useSettingsForm = () => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [themeValue, setThemeValue] = useState<'lightblue' | 'darkblue'>('lightblue');
  const [githubIDValue, setGithubIDValue] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const dispatch = useDispatch();

  const initNickname = useAppSelector(getNickname);
  const initTheme = useAppSelector<'lightblue' | 'darkblue'>(getTheme);
  const initGithubID = useAppSelector(getGithubID);
  const { lat: initLatitude, lon: initLongitude } = useAppSelector(getWeather);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(e.currentTarget.value);
  };

  const handleNicknameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setNickname(nicknameValue));
  };

  const handleThemeChange = (theme: 'lightblue' | 'darkblue') => {
    setThemeValue(theme);
  };

  const handleThemeClick = () => {
    dispatch(setTheme(themeValue));
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubIDValue(e.currentTarget.value);
  };

  const handleGithubSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setGithubID(githubIDValue));
  };

  const handleLatitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLatitude(e.currentTarget.value);
  };

  const handleLongitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLongitude(e.currentTarget.value);
  };

  const handleWeatherSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setWeather({
        lat: Number(latitude),
        lon: Number(longitude),
      })
    );
  };

  useEffect(() => {
    setNicknameValue(initNickname);
    setThemeValue(initTheme);
    setGithubIDValue(initGithubID);
    setLatitude(initLatitude.toString());
    setLongitude(initLongitude.toString());
  }, [initNickname, initTheme, initGithubID, initLatitude, initLongitude]);

  return {
    nicknameValue,
    themeValue,
    githubIDValue,
    latitude,
    longitude,
    handleNicknameChange,
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
    handleLatitudeChange,
    handleLongitudeChange,
    handleWeatherSubmit,
  };
};
