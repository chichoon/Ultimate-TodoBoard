import { Button } from 'components';
import { ISettingsFormProps } from 'types/settings';
import styles from './settingsFormElement.module.scss';

interface IProps {
  formProps: ISettingsFormProps;
}

const SettingsFormListElement = ({ formProps }: IProps) => {
  return (
    <li>
      <form className={styles.settingForm} onSubmit={formProps.onSubmit}>
        <label htmlFor={formProps.name}>{formProps.label}</label>
        <input type='text' name={formProps.name} value={formProps.value} onChange={formProps.onChange} />
        <Button type='submit'>변경</Button>
      </form>
    </li>
  );
};

export default SettingsFormListElement;
