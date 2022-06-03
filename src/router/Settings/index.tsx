import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getInformations } from 'states/information';
import { getTodo } from 'states/todo';
import ResetAppElement from './ResetAppElement';

import styles from './settings.module.scss';
import SettingsFormElement from './SettingsFormElement';

const Settings = () => {
  return (
    <main className={styles.settingsMain}>
      <ul className={styles.settingsListWrapper}>
        <li>
          <SettingsFormElement />
        </li>
        <li>
          <ResetAppElement />
        </li>
      </ul>
    </main>
  );
};
// TODO: 설정 페이지 완성
// TODO: 닉네임, 배경이미지, 테마 등
// TODO: 데이터 리셋 버튼

export default Settings;
