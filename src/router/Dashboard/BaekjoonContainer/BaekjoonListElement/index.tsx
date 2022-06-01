import cx from 'classnames';

import { IBaekjoonItem } from 'types/information';
import solvedacIcon from './solvedacIcon';

import styles from './baekjoonListElement.module.scss';

interface IProps {
  item: IBaekjoonItem;
  index: number;
}

const BaekjoonListElement = ({ item, index }: IProps) => {
  const tierClass = `tier${Math.floor((item.tier + 4) / 5)}`;

  const handleDoneButtoClick = () => {
    console.log(`삭제 ${index}`);
  };

  return (
    <div className={cx(styles.baekjoonElementWrapper, styles[tierClass])}>
      <a href={`https://www.acmicpc.net/problem/${item.id}`} target='_blank' rel='noreferrer'>
        {solvedacIcon(item.tier)}
        <dl className={styles.baekjoonInformation}>
          <dt>{item.id}</dt>
          <dd>{item.problem}</dd>
        </dl>
      </a>
      <button type='button' className={styles.baekjoonDoneButton} onClick={handleDoneButtoClick}>
        완료
      </button>
    </div>
  );
};

export default BaekjoonListElement;
