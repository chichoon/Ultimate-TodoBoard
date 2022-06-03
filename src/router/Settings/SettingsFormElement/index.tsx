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
    handleNicknameSubmit,
    handleThemeChange,
    handleThemeClick,
    handleGithubChange,
    handleGithubSubmit,
  } = useSettingsForm();

  return (
    <div className={cx(styles.settingsFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>프로필 설정</h3>
      </div>
      <ul>
        <li>
          <form className={styles.settingList} onSubmit={handleNicknameSubmit}>
            <label htmlFor='nickname'>이름</label>
            <input type='text' name='nickname' value={nicknameValue} onChange={handleNicknameChange} />
            <Button type='submit'>변경</Button>
          </form>
        </li>
        <li className={styles.settingList}>
          <span>테마</span>
          <SettingsFormDropdown value={themeValue} onDropdownSelect={handleThemeChange} />
          <Button type='button' onClick={handleThemeClick}>
            변경
          </Button>
        </li>
        <li>
          <form className={styles.settingList} onSubmit={handleGithubSubmit}>
            <label htmlFor='githubID'>Github ID</label>
            <input type='text' name='githubID' value={githubIDValue} onChange={handleGithubChange} />
            <Button type='submit'>변경</Button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default SettingsFormElement;
