import { Dispatch, SetStateAction } from 'react';

import { useAppSelector } from 'hooks';
import { getNickname } from 'states/settings';

import { FeatherIcon, HamburgerIcon } from 'assets/svgs';
import styles from './topNavigationBar.module.scss';

interface IProps {
  setIsBarHidden: Dispatch<SetStateAction<boolean>>;
}

const TopNavigationBar = ({ setIsBarHidden }: IProps) => {
  const nickname = useAppSelector(getNickname);

  const handleHamburgerClick = () => {
    setIsBarHidden((prevState) => !prevState);
  };

  return (
    <nav className={styles.navigationBarWrapper}>
      <div className={styles.navigationBarIcon}>
        <FeatherIcon />
      </div>
      <div className={styles.navigationBarRight}>
        <h3>
          <b>{nickname}</b>
        </h3>
        <button type='button' className={styles.hamburgerButton} onClick={handleHamburgerClick}>
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
