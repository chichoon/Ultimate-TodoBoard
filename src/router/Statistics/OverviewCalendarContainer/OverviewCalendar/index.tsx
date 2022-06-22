import { useState } from 'react';
import dayjs from 'dayjs';
import styles from './overviewCalendar.module.scss';
import CalendarHeader from './CalendarHeader';
import CalendarSelectMonth from './CalendarSelectMonth';

const today = dayjs();

const OverviewCalendar = () => {
  const [date, setDate] = useState(today);
  const [isSelectMonthOpen, setIsSelectMonthOpen] = useState(false);

  return (
    <div className={styles.calendarWrapper}>
      <CalendarHeader date={date} setDate={setDate} setIsSelectMonthOpen={setIsSelectMonthOpen} />
      <div className={styles.calendarBottom}>
        {isSelectMonthOpen ? (
          <CalendarSelectMonth setDate={setDate} setIsSelectMonthOpen={setIsSelectMonthOpen} />
        ) : (
          <div>아아아</div>
        )}
      </div>
    </div>
  );
};

export default OverviewCalendar;
