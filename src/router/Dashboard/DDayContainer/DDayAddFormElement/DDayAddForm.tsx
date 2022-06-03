import { useState, FormEvent, ChangeEvent, useRef, Dispatch, SetStateAction } from 'react';
import { useClickAway } from 'react-use';
import dayjs from 'dayjs';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { Button, ColorPalette, CustomDatePicker } from 'components';

import { ColorFillIcon } from 'assets/svgs';
import styles from './ddayAddForm.module.scss';
import { addDDay } from 'states/information';

interface IProps {
  setIsAddButtonShown: Dispatch<SetStateAction<boolean>>;
  setIsFormShown: Dispatch<SetStateAction<boolean>>;
}

const today = new Date();

const DDayAddForm = ({ setIsAddButtonShown, setIsFormShown }: IProps) => {
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

  const handleCancelClick = () => {
    setIsFormShown(false);
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
    console.log(title);
    setIsAddButtonShown(false);
  };

  useClickAway(paletteRef, () => {
    setIsColorPaletteShown(false);
  });

  return (
    <form onSubmit={handleFormSubmit} className={styles.ddayFormWrapper}>
      <div className={styles.inputs}>
        <input
          type='text'
          required
          maxLength={10}
          value={title}
          onChange={handleTitleChange}
          placeholder='디데이 이름 (10자)'
        />
        <input type='text' maxLength={1} value={icon} onChange={handleIconChange} placeholder='식별 문자' />
      </div>
      <div className={styles.pickers}>
        <div className={styles.paletteButton} ref={paletteRef}>
          <button type='button' style={{ backgroundColor: color }} onClick={handleColorButtonClick}>
            <ColorFillIcon />
            <span className={cx({ [styles.isFillWhite]: color === '#ffffff' })}>{color}</span>
          </button>
          {isColorPaletteShown && <ColorPalette onColorSet={handleColorSet} />}
        </div>
        <CustomDatePicker selected={dday} onChange={handleDDayChange} />
      </div>
      <div className={styles.buttons}>
        <Button type='submit'>추가</Button>
        <Button type='button' onClick={handleCancelClick}>
          취소
        </Button>
      </div>
    </form>
  );
};

// TODO: 색상버튼, 날짜버튼 우측으로 래핑
// TODO: 커스텀훅?

export default DDayAddForm;
