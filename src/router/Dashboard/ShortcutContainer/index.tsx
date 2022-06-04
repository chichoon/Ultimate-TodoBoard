import { useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getShortcut } from 'states/information';
import ShortcutAddFormElement from './ShortcutAddFormElement';
import ShortcutListElement from './ShortcutListElement';

import { PlusIcon } from 'assets/svgs';
import styles from './shortcutContainer.module.scss';

const ShortcutContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const shortcutItems = useAppSelector(getShortcut);

  const handleAddButtonClick = () => {
    setIsAddFormShown((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.shortcutWrapper, 'listContainer')}>
      <div className={cx('listContainerAddHeader')}>
        <h3>바로가기</h3>
        <button type='button' onClick={handleAddButtonClick}>
          <PlusIcon className={cx('addFormIcon', { isRemoving: isAddFormShown })} />
        </button>
      </div>
      <div className={styles.shortcutItemsWrapper}>
        {isAddFormShown && <ShortcutAddFormElement setIsAddFormShown={setIsAddFormShown} />}
        <ul>
          {shortcutItems.map((item, index) => {
            const key = `shortcut-index-${index}`;
            return <ShortcutListElement key={key} item={item} index={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShortcutContainer;
