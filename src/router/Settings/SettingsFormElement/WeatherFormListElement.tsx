import { Button } from 'components';
import { ISettingsFormProps } from 'types/settings';
import styles from './weatherFormListElement.module.scss';

interface IProps {
  latProps: ISettingsFormProps;
  lonProps: ISettingsFormProps;
}

const WeatherFormListElement = ({ latProps, lonProps }: IProps) => {
  return (
    <li>
      <form className={styles.weatherForm} onSubmit={latProps.onSubmit}>
        <div className={styles.weatherFormLeft}>
          <label htmlFor={latProps.name}>{latProps.label}</label>
          <label htmlFor={lonProps.name}>{lonProps.label}</label>
        </div>
        <div className={styles.weatherFormMiddle}>
          <div>
            <input type='text' name={latProps.name} value={latProps.value} onChange={latProps.onChange} />
          </div>
          <div>
            <input type='text' name={lonProps.name} value={lonProps.value} onChange={lonProps.onChange} />
          </div>
        </div>
        <Button type='submit'>변경</Button>
      </form>
    </li>
  );
};

export default WeatherFormListElement;
