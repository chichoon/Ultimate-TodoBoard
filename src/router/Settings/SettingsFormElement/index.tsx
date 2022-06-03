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
    handleNicknameChange,
    handleNicknameClick,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubClick,
  } = useSettingsForm();

  return (
    <div className={cx(styles.settingsFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>프로필 설정</h3>
      </div>
      <ul>
        <li className={styles.settingList}>
          <label htmlFor='nickname'>이름</label>
          <input type='text' name='nickname' value={nicknameValue} onChange={handleNicknameChange} />
          <Button type='button' onClick={handleNicknameClick}>
            변경
          </Button>
        </li>
        <li className={styles.settingList}>
          <span>테마</span>
          <SettingsFormDropdown value={themeValue} onDropdownSelect={handleThemeChange} />
          <Button type='button' onClick={handleThemeClick}>
            변경
          </Button>
        </li>
        <li className={styles.settingList}>
          <label htmlFor='githubID'>Github ID</label>
          <input type='text' name='githubID' value={githubIDValue} onChange={handleGithubChange} />
          <Button type='button' onClick={handleGithubClick}>
            변경
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SettingsFormElement;
