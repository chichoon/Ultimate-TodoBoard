import { useEffect, useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getDDays } from 'states/information';
import DDayListElement from './DDayListElement';
import DDayAddFormElement from './DDayAddFormElement';

import styles from './ddayContainer.module.scss';

const DDayContainer = () => {
  const [isAddButtonShown, setIsAddButtonShown] = useState(true);
  const ddays = useAppSelector(getDDays);

  useEffect(() => {
    if (ddays.length < 4) setIsAddButtonShown(true);
    else setIsAddButtonShown(false);
  }, [ddays]);

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
          {isAddButtonShown && <DDayAddFormElement setIsAddButtonShown={setIsAddButtonShown} />}
        </ul>
      </div>
    </div>
  );
};

export default DDayContainer;

// TODO: DDay container 완성
