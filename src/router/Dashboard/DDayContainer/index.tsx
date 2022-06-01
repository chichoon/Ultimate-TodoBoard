import { useState } from 'react';
import cx from 'classnames';

import { PlusIcon } from 'assets/svgs';
import styles from './ddayContainer.module.scss';

const DDayContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddFormShown((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.ddayWrapper, 'listContainer')}>
      <div className={cx('listContainerAddHeader')}>
        <h3>디데이 목록</h3>
      </div>
      <button type='button' onClick={handleAddButtonClick}>
        <PlusIcon className={cx('addFormIcon', { isRemoving: isAddFormShown })} />
      </button>
    </div>
  );
};

export default DDayContainer;

// TODO: DDay container 완성
