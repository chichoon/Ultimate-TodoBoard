import { IBaekjoonItem } from 'types/information';
import solvedacIcon from './SolvedacIcon';

import styles from './baekjoonListElement.module.scss';

interface IProps {
  item: IBaekjoonItem;
}

const BaekjoonListElement = ({ item }: IProps) => {
  return (
    <div className={styles.baekjoonElementWrapper}>
      {solvedacIcon(item.tier)}
      <p className={styles.baekjoonTitle}>{item.problem}</p>
    </div>
  );
};
