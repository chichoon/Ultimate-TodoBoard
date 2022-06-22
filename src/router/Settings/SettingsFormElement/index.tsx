import cx from 'classnames';

import { Button } from 'components';
import { useSettingsForm } from 'hooks';
import { ISettingsFormProps } from 'types/settings';
import SettingsFormDropdown from './SettingsFormDropdown';

import styles from './settingsFormElement.module.scss';
import SettingsFormListElement from './SettingsFormListElement';
import WeatherFormListElement from './WeatherFormListElement';

const SettingsFormElement = () => {
  const {
    nicknameValue,
    themeValue,
    githubIDValue,
    latitudeValue,
    longitudeValue,
    solvedacIDValue,
    handleNicknameChange,
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
    handleLatitudeChange,
    handleLongitudeChange,
    handleWeatherSubmit,
    handleSolvedacChange,
    handleSolvedacSubmit,
  } = useSettingsForm();

  const settingsFormListArray: ISettingsFormProps[] = [
    {
      name: 'nickname',
      value: nicknameValue,
      label: '이름',
      onSubmit: handleNicknameSubmit,
      onChange: handleNicknameChange,
    },
    {
      name: 'githubID',
      value: githubIDValue,
      label: 'Github ID',
      onSubmit: handleGithubSubmit,
      onChange: handleGithubChange,
    },
    {
      name: 'solvedacID',
      value: solvedacIDValue,
      label: 'Solved.ac ID',
      onSubmit: handleSolvedacSubmit,
      onChange: handleSolvedacChange,
    },
  ];

  const latProps = {
    name: 'latitude',
    value: latitudeValue,
    label: '위도',
    onSubmit: handleWeatherSubmit,
    onChange: handleLatitudeChange,
  };

  const lonProps = {
    name: 'longitude',
    value: longitudeValue,
    label: '경도',
    onSubmit: handleWeatherSubmit,
    onChange: handleLongitudeChange,
  };

  return (
    <li className={cx(styles.settingsFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>프로필 설정</h3>
      </div>
      <ul>
        <li className={styles.settingForm}>
          <span>테마</span>
          <SettingsFormDropdown value={themeValue} onDropdownSelect={handleThemeChange} />
          <Button type='button' onClick={handleThemeClick}>
            변경
          </Button>
        </li>
        {settingsFormListArray.map((formProps: ISettingsFormProps) => (
          <SettingsFormListElement key={`settings-list-${formProps.name}`} formProps={formProps} />
        ))}
        <WeatherFormListElement latProps={latProps} lonProps={lonProps} />
      </ul>
    </li>
  );
};

export default SettingsFormElement;
