import { useState, FormEvent, ChangeEvent, useRef, Dispatch, SetStateAction } from 'react';
import { useClickAway } from 'react-use';
import dayjs from 'dayjs';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { Button, ColorPalette, CustomDatePicker } from 'components';

import { ColorFillIcon } from 'assets/svgs';
import styles from './ddayAddFormElement.module.scss';
import { addDDay } from 'states/information';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const today = new Date();

const DDayAddForm = ({ setIsAddFormShown }: IProps) => {
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

  return (
    <div className={cx(styles.ddayAddFormWrapper, 'listContainerAddForm')}>
      <form onSubmit={handleFormSubmit} className={styles.ddayFormWrapper}>
        <div className={styles.inputs}>
          <input type='text' required value={title} onChange={handleTitleChange} placeholder='디데이 이름' />
          <input type='text' required value={icon} onChange={handleIconChange} placeholder='식별 문자' />
        </div>
        <div className={styles.pickers}>
          <div className={styles.paletteButton} ref={paletteRef}>
            <button type='button' style={{ backgroundColor: color }} onClick={handleColorButtonClick}>
              <ColorFillIcon />
              <span>{color}</span>
            </button>
            {isColorPaletteShown && <ColorPalette onColorSet={handleColorSet} />}
          </div>
          <CustomDatePicker selected={dday} onChange={handleDDayChange} />
        </div>
        <Button type='submit'>추가</Button>
      </form>
    </div>
  );
};

// TODO: 커스텀훅?

export default DDayAddForm;
