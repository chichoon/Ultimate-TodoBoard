import { useClickAway } from 'react-use';
import { useState, useRef, Dispatch, SetStateAction, ChangeEvent, FormEvent } from 'react';
import dayjs from 'dayjs';

import { useAppDispatch } from 'hooks';
import { addDDay } from 'states/information';

const today = new Date();

export const useDDayForm = (setIsAddFormShown: Dispatch<SetStateAction<boolean>>) => {
  const [title, setTitle] = useState('');
  const [dday, setDDay] = useState(today);
  const [color, setColor] = useState('#EB9694');
  const [icon, setIcon] = useState('');
  const [isColorPaletteShown, setIsColorPaletteShown] = useState(false);
  const paletteRef = useRef(null);
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIcon(e.currentTarget.value);
  };

  const handleDDayChange = (date: Date) => {
    setDDay(date);
  };

  const handleColorSet = (newColor: string) => {
    setColor(newColor);
    setIsColorPaletteShown(false);
  };

  const handleColorButtonClick = () => {
    setIsColorPaletteShown((prevState) => !prevState);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addDDay({
        title,
        icon,
        color,
        date: dayjs(dday).format('YYYY-MM-DD'),
      })
    );
    setIsAddFormShown(false);
  };

  useClickAway(paletteRef, () => {
    setIsColorPaletteShown(false);
  });

  return {
    paletteRef,
    title,
    dday,
    color,
    icon,
    isColorPaletteShown,
    handleTitleChange,
    handleIconChange,
    handleDDayChange,
    handleColorSet,
    handleColorButtonClick,
    handleFormSubmit,
  };
};
