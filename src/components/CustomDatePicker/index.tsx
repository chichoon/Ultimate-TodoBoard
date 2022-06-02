import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './customDatePicker.module.scss';

interface IProps {
  selected: Date;
  today: Date;
  onChange: (date: Date) => void;
}

const CustomDatePicker = ({ selected, today, onChange }: IProps) => {
  return (
    <DatePicker
      className={styles.datePickerWrapper}
      locale={ko}
      minDate={today}
      selected={selected}
      onChange={onChange}
    />
  );
};

export default CustomDatePicker;
