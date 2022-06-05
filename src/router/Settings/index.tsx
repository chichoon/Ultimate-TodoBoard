import ResetAppElement from './ResetAppElement';

import styles from './settings.module.scss';
import SettingsFormElement from './SettingsFormElement';

const Settings = () => {
  return (
    <main className={styles.settingsMain}>
      <ul className={styles.settingsListWrapper}>
        <SettingsFormElement />
        <ResetAppElement />
      </ul>
    </main>
  );
};

export default Settings;
