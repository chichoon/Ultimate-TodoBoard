import cx from 'classnames';
import OverviewCalendar from './OverviewCalendar';

import styles from './overviewCalendarContainer.module.scss';

const OverviewCalendarContainer = () => {
  return (
    <li className={cx(styles.calendarWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>대시보드 캘린더</h3>
      </div>
      <div className={cx(styles.calendarInner, 'listContainerBody')}>
        <OverviewCalendar />
      </div>
    </li>
  );
};

export default OverviewCalendarContainer;
