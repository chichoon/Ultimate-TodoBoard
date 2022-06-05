import cx from 'classnames';

import { Button } from 'components';
import { useSettingsForm } from 'hooks';
import SettingsFormDropdown from './SettingsFormDropdown';

import styles from './settingsFormElement.module.scss';

const SettingsFormElement = () => {
  const {
    nicknameValue,
    themeValue,
    githubIDValue,
    latitude,
    longitude,
    handleNicknameChange,
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
    handleLatitudeChange,
    handleLongitudeChange,
    handleLatitudeSubmit,
    handleLongitudeSubmit,
  } = useSettingsForm();

  return (
    <li className={cx(styles.settingsFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>프로필 설정</h3>
      </div>
      <ul>
        <li>
          <form className={styles.settingForm} onSubmit={handleNicknameSubmit}>
            <label htmlFor='nickname'>이름</label>
            <input type='text' name='nickname' value={nicknameValue} onChange={handleNicknameChange} />
            <Button type='submit'>변경</Button>
          </form>
        </li>
        <li className={styles.settingForm}>
          <span>테마</span>
          <SettingsFormDropdown value={themeValue} onDropdownSelect={handleThemeChange} />
          <Button type='button' onClick={handleThemeClick}>
            변경
          </Button>
        </li>
        <li>
          <form className={styles.settingForm} onSubmit={handleGithubSubmit}>
            <label htmlFor='githubID'>Github ID</label>
            <input type='text' name='githubID' value={githubIDValue} onChange={handleGithubChange} />
            <Button type='submit'>변경</Button>
          </form>
        </li>
        <li>
          <form className={styles.settingForm} onSubmit={handleLatitudeSubmit}>
            <label htmlFor='latitude'>위도</label>
            <input type='text' name='latitude' value={latitude} onChange={handleLatitudeChange} />
            <Button type='submit'>변경</Button>
          </form>

          <form className={styles.settingForm} onSubmit={handleLatitudeSubmit}>
            <label htmlFor='longitude'>경도</label>
            <input type='text' name='longitude' value={longitude} onChange={handleLongitudeChange} />
            <Button type='submit'>변경</Button>
          </form>
        </li>
      </ul>
    </li>
  );
};

export default SettingsFormElement;
