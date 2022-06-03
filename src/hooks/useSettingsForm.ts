import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { getGithubID, getTheme, setNickname, getNickname, setTheme, setGithubID } from 'states/information';
import { useAppSelector } from 'hooks';

export const useSettingsForm = () => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [themeValue, setThemeValue] = useState<'lightblue' | 'darkblue'>('lightblue');
  const [githubIDValue, setGithubIDValue] = useState('');
  const dispatch = useDispatch();

  const initNickname = useAppSelector(getNickname);
  const initTheme = useAppSelector<'lightblue' | 'darkblue'>(getTheme);
  const initGithubID = useAppSelector(getGithubID);

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

  useEffect(() => {
    setNicknameValue(initNickname);
    setThemeValue(initTheme);
    setGithubIDValue(initGithubID);
  }, [initNickname, initTheme, initGithubID]);

  return {
    nicknameValue,
    themeValue,
    githubIDValue,
    handleNicknameChange,
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
  };
};
