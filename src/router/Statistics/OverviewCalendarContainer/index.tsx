import Calendar from 'react-calendar';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getTodo } from 'states/todo';
import { getDDays } from 'states/information';

import 'react-calendar/dist/Calendar.css';
import styles from './overviewCalendarContainer.module.scss';

const OverviewCalendarContainer = () => {
  const todo = useAppSelector(getTodo);
  const dday = useAppSelector(getDDays);

  return (
    <li className={cx(styles.calendarWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>대시보드 캘린더</h3>
      </div>
      <div className={styles.calendarInner}>
        <Calendar className={styles.calendar} calendarType='US' />
      </div>
    </li>
  );
};

export default OverviewCalendarContainer;
