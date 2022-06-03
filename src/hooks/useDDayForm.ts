import { IDDay } from 'types/information.d';
import { useClickAway } from 'react-use';
import { useState, useRef, Dispatch, SetStateAction, ChangeEvent, FormEvent } from 'react';
import dayjs from 'dayjs';

import { useAppDispatch } from 'hooks';
import { addDDay } from 'states/information';

const today = new Date();

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
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDDay((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleDDayChange = (newDate: Date) => {
    setDate(newDate);
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
    dispatch(
      addDDay({
        ...dday,
        date: dayjs(date).format('YYYY-MM-DD'),
      })
    );
    setIsAddFormShown(false);
  };

  useClickAway(paletteRef, () => {
    setIsColorPaletteShown(false);
  });

  return {
    paletteRef,
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
