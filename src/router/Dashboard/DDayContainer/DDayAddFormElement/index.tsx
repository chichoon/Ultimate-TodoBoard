import { Dispatch, SetStateAction } from 'react';
import cx from 'classnames';

import { useDDayForm } from 'hooks';
import { Button, ColorPalette, CustomDatePicker } from 'components';

import { ColorFillIcon } from 'assets/svgs';
import styles from './ddayAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const DDayAddForm = ({ setIsAddFormShown }: IProps) => {
  const {
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
  } = useDDayForm(setIsAddFormShown);

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

export default DDayAddForm;
