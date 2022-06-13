import { Dispatch, SetStateAction } from 'react';
import cx from 'classnames';

import { useDDayForm } from 'hooks';
import { Button, ColorPalette } from 'components';

import { ColorFillIcon } from 'assets/svgs';
import styles from './ddayAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const DDayAddForm = ({ setIsAddFormShown }: IProps) => {
  const {
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
  } = useDDayForm(setIsAddFormShown);

  return (
    <div className={cx(styles.ddayAddFormWrapper, 'listContainerAddForm')}>
      <form onSubmit={handleFormSubmit} className={styles.ddayFormWrapper}>
        <div className={styles.inputs}>
          <input
            type='text'
            name='title'
            required
            value={dday.title}
            onChange={handleInputChange}
            ref={inputRef}
            placeholder='제목'
          />
          <input
            type='text'
            name='icon'
            required
            value={dday.icon}
            onChange={handleInputChange}
            placeholder='식별 문자'
          />
        </div>
        <div className={styles.pickers}>
          <div className={styles.paletteButton} ref={paletteRef}>
            <button type='button' style={{ backgroundColor: dday.color }} onClick={handleColorButtonClick}>
              <ColorFillIcon />
              <span>{dday.color}</span>
            </button>
            {isColorPaletteShown && <ColorPalette onColorSet={handleColorSet} />}
          </div>
          <input type='date' value={date} onChange={handleDDayChange} />
        </div>
        <Button type='submit'>추가</Button>
      </form>
    </div>
  );
};

export default DDayAddForm;
