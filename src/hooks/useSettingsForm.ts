import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'hooks';
import {
  getWeather,
  getGithubID,
  getTheme,
  getNickname,
  getSolvedacID,
  setWeather,
  setNickname,
  setTheme,
  setGithubID,
  setSolvedacID,
} from 'states/settings';

export const useSettingsForm = () => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [themeValue, setThemeValue] = useState<'lightblue' | 'darkblue'>('lightblue');
  const [githubIDValue, setGithubIDValue] = useState('');
  const [latitudeValue, setLatitudeValue] = useState('');
  const [longitudeValue, setLongitudeValue] = useState('');
  const [solvedacIDValue, setSolvedacIDValue] = useState('');
  const dispatch = useDispatch();

  const initNickname = useAppSelector(getNickname);
  const initTheme = useAppSelector<'lightblue' | 'darkblue'>(getTheme);
  const initGithubID = useAppSelector(getGithubID);
  const { lat: initLatitude, lon: initLongitude } = useAppSelector(getWeather);
  const initSolvedacID = useAppSelector(getSolvedacID);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => setNicknameValue(e.currentTarget.value);

  const handleThemeChange = (theme: 'lightblue' | 'darkblue') => setThemeValue(theme);

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => setGithubIDValue(e.currentTarget.value);

  const handleLatitudeChange = (e: ChangeEvent<HTMLInputElement>) => setLatitudeValue(e.currentTarget.value);

  const handleLongitudeChange = (e: ChangeEvent<HTMLInputElement>) => setLongitudeValue(e.currentTarget.value);

  const handleSolvedacChange = (e: ChangeEvent<HTMLInputElement>) => setSolvedacIDValue(e.currentTarget.value);

  const handleNicknameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setNickname(nicknameValue));
  };

  const handleThemeClick = () => dispatch(setTheme(themeValue));

  const handleGithubSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setGithubID(githubIDValue));
  };

  const handleWeatherSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setWeather({
        lat: Number(latitudeValue),
        lon: Number(longitudeValue),
      })
    );
  };

  const handleSolvedacSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSolvedacID(solvedacIDValue));
  };

  useEffect(() => {
    setNicknameValue(initNickname);
    setThemeValue(initTheme);
    setGithubIDValue(initGithubID);
    setLatitudeValue(initLatitude.toString());
    setLongitudeValue(initLongitude.toString());
    setSolvedacIDValue(initSolvedacID);
  }, [initNickname, initTheme, initGithubID, initLatitude, initLongitude, initSolvedacID]);

  return {
    nicknameValue,
    themeValue,
    githubIDValue,
    latitudeValue,
    longitudeValue,
    solvedacIDValue,
    handleNicknameChange,
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
    handleLatitudeChange,
    handleLongitudeChange,
    handleWeatherSubmit,
    handleSolvedacChange,
    handleSolvedacSubmit,
  };
};
