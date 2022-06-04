import cx from 'classnames';

import styles from './resetAppElement.module.scss';

const ResetAppElement = () => {
  return (
    <div className={cx(styles.settingsFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>데이터 리셋</h3>
      </div>
    </div>
  );
};

export default ResetAppElement;
