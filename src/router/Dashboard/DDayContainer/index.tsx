import { useEffect, useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getDDays } from 'states/information';

import { PlusIcon } from 'assets/svgs';
import styles from './ddayContainer.module.scss';
import DDayListElement from './DDayListElement';
import DDayAddForm from './DDayAddForm';

const DDayContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const [isAddButtonShown, setIsAddButtonShown] = useState(true);
  const ddays = useAppSelector(getDDays);

  const handleAddButtonClick = () => {
    const promise = new Promise((resolve) => {
      resolve(setIsAddFormShown(true));
    });
    promise.then(() => setIsAddButtonShown(false));
  };

  useEffect(() => {
    if (ddays.length < 4) setIsAddButtonShown(true);
    else setIsAddButtonShown(false);
  }, [ddays, isAddFormShown]);

  return (
    <div className={cx(styles.ddayWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>디데이 목록</h3>
      </div>
      <div className={styles.ddayListWrapper}>
        <ul>
          {ddays.map((item, index) => {
            const key = `dday-index-${index}`;
            return (
              <li key={key}>
                <DDayListElement item={item} index={index} />
              </li>
            );
          })}
          {isAddButtonShown && (
            <li className={styles.ddayAddForm}>
              <button type='button' onClick={handleAddButtonClick}>
                <PlusIcon />
              </button>
            </li>
          )}
          {isAddFormShown && <DDayAddForm setIsAddFormShown={setIsAddButtonShown} />}
        </ul>
      </div>
    </div>
  );
};

export default DDayContainer;

// TODO: DDay container 완성
