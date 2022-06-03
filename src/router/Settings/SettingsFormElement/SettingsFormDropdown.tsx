import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import styles from './settingsFormDropdown.module.scss';

type Theme = 'lightblue' | 'darkblue';
interface IProps {
  value: Theme;
  onDropdownSelect: (selected: Theme) => void;
}

const THEME_LIST = ['lightblue', 'darkblue'];

const SettingsFormDropdown = ({ value, onDropdownSelect }: IProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownOpenClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleDropdownElemClick = (selected: string) => {
    onDropdownSelect(selected as Theme);
    setIsDropdownOpen(false);
  };

  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button type='button' onClick={handleDropdownOpenClick}>
        {value}
      </button>
      {isDropdownOpen && (
        <ul className={styles.dropdownList}>
          {THEME_LIST.map((item) => (
            <li key={`dropdown-theme-${item}`}>
              <button type='button' onClick={() => handleDropdownElemClick(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SettingsFormDropdown;
