import DatePicker from 'react-datepicker';

interface IProps {
  selected: Date;
  today: Date;
  onChange: (date: Date) => void;
}

const CustomDatePicker = ({ selected, today, onChange }: IProps) => {
  return <DatePicker minDate={today} selected={selected} onChange={onChange} />;
};

export default CustomDatePicker;
