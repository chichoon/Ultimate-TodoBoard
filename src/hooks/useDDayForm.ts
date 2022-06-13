import { useState, useRef, Dispatch, SetStateAction, ChangeEvent, FormEvent } from 'react';
import { useClickAway, useMount } from 'react-use';
import dayjs from 'dayjs';

import { IDDay } from 'types/information.d';
import { addDDay } from 'states/information';
import { useAppDispatch } from 'hooks';

const today = dayjs().format('YYYY-MM-DD');

export const useDDayForm = (setIsAddFormShown: Dispatch<SetStateAction<boolean>>) => {
  const [dday, setDDay] = useState<IDDay>({
    title: '',
    date: '',
    color: '#EB9694',
    icon: '',
  });
  const [date, setDate] = useState(today);
  const [isColorPaletteShown, setIsColorPaletteShown] = useState(false);
  const paletteRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDDay((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleDDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleColorSet = (newColor: string) => {
    setDDay((prevState) => {
      return { ...prevState, color: newColor };
    });
    setIsColorPaletteShown(false);
  };

  const handleColorButtonClick = () => {
    setIsColorPaletteShown((prevState) => !prevState);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addDDay({ ...dday, date }));
    setIsAddFormShown(false);
  };

  useClickAway(paletteRef, () => {
    setIsColorPaletteShown(false);
  });

  useMount(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  return {
    paletteRef,
    inputRef,
    dday,
    date,
    isColorPaletteShown,
    handleInputChange,
    handleDDayChange,
    handleColorSet,
    handleColorButtonClick,
    handleFormSubmit,
  };
};
