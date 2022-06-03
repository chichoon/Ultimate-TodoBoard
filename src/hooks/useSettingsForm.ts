import { useState, ChangeEvent } from 'react';
import { useMount } from 'react-use';
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

  const handleNicknameClick = () => {
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

  const handleGithubClick = () => {
    dispatch(setGithubID(githubIDValue));
  };

  useMount(() => {
    setNicknameValue(initNickname);
    setThemeValue(initTheme);
    setGithubIDValue(initGithubID);
  });

  return {
    nicknameValue,
    themeValue,
    githubIDValue,
    handleNicknameChange,
    handleNicknameClick,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubClick,
  };
};
