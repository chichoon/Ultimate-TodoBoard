import { FeatherIcon, HamburgerIcon } from 'assets/svgs';
import { Dispatch, SetStateAction } from 'react';
import styles from './topNavigationBar.module.scss';

interface IProps {
  setIsBarHidden: Dispatch<SetStateAction<boolean>>;
}

const TopNavigationBar = ({ setIsBarHidden }: IProps) => {
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
          <b>chichoon</b>
        </h3>
        <button type='button' className={styles.hamburgerButton} onClick={handleHamburgerClick}>
          <HamburgerIcon />
        </button>
        {/* TODO: 닉네임 교체 */}
      </div>
    </nav>
  );
};

export default TopNavigationBar;
