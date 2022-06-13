import { useEffect, useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getDDays } from 'states/information';
import DDayListElement from './DDayListElement';
import DDayAddFormElement from './DDayAddFormElement';

import styles from './ddayContainer.module.scss';
import { PlusIcon } from 'assets/svgs';

const DDayContainer = () => {
  const [isAddButtonShown, setIsAddButtonShown] = useState(true);
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const ddays = useAppSelector(getDDays);

  useEffect(() => {
    if (ddays.length < 10) setIsAddButtonShown(true);
    else setIsAddButtonShown(false);
  }, [ddays]);

  const handleAddButtonClick = () => {
    setIsAddFormShown((prevState) => !prevState);
  };

  return (
    <li className={cx(styles.ddayWrapper, 'listContainer')}>
      <div className={cx({ listContainerAddHeader: isAddButtonShown, listContainerHeader: !isAddButtonShown })}>
        <h3>디데이 목록</h3>
        <button type='button' onClick={handleAddButtonClick}>
          <PlusIcon className={cx('addFormIcon', { isRemoving: isAddFormShown })} />
        </button>
      </div>
      <div className={styles.ddayListWrapper}>
        {isAddFormShown && <DDayAddFormElement setIsAddFormShown={setIsAddFormShown} />}
        <ul>
          {ddays.map((item, index) => {
            const key = `dday-index-${index}`;
            return <DDayListElement key={key} item={item} index={index} />;
          })}
        </ul>
      </div>
    </li>
  );
};

export default DDayContainer;

// TODO: DDay container 완성
