import { useState } from 'react';
import cx from 'classnames';

import BaekjoonAddFormElement from './BaekjoonAddFormElement';
import { useAppSelector, useFetchBaekjoon } from 'hooks';
import { getBaekjoonItems } from 'states/information';

import { PlusIcon } from 'assets/svgs';
import styles from './baekjoonContainer.module.scss';
import BaekjoonListElement from './BaekjoonListElement';

const BaekjoonContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const baekjoonList = useAppSelector(getBaekjoonItems);
  useFetchBaekjoon();

  const handleAddButtonClick = () => {
    setIsAddFormShown((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.baekjoonWrapper, 'listContainer')}>
      <div className={cx('listContainerAddHeader')}>
        <h3>밀린 백준 문제 목록</h3>
        <button type='button' onClick={handleAddButtonClick}>
          <PlusIcon className={cx('addFormIcon', { isRemoving: isAddFormShown })} />
        </button>
      </div>
      <div className={styles.baekjoonListWrapper}>
        {isAddFormShown && <BaekjoonAddFormElement setIsAddFormShown={setIsAddFormShown} />}
        <ul>
          {baekjoonList.map((item, index) => {
            const key = `baekjoon-index-${index}`;
            return (
              <li key={key}>
                <BaekjoonListElement item={item} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BaekjoonContainer;

// TODO: baekjoon container 완성
