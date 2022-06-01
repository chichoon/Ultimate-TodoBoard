import { useState } from 'react';
import cx from 'classnames';

import { PlusIcon } from 'assets/svgs';
import styles from './baekjoonContainer.module.scss';
import BaekjoonAddFormElement from './BaekjoonAddFormElement';

const BaekjoonContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);

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
      <div className={styles.todoListWrapper}>
        {isAddFormShown && <BaekjoonAddFormElement setIsAddFormShown={setIsAddFormShown} />}
      </div>
    </div>
  );
};

export default BaekjoonContainer;

// TODO: baekjoon container 완성
