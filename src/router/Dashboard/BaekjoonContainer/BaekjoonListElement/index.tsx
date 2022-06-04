import { useState } from 'react';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { IBaekjoonItem } from 'types/information';
import { deleteBaekjoon } from 'states/information';
import { Button } from 'components';
import { DeleteConfirmModal } from 'router/Dashboard/_shared';

import styles from './baekjoonListElement.module.scss';
import solvedacIcon from './solvedacIcon';
import { XIcon } from 'assets/svgs';

interface IProps {
  item: IBaekjoonItem;
  index: number;
}

const BaekjoonListElement = ({ item, index }: IProps) => {
  const tierClass = `tier${Math.floor((item.tier + 4) / 5)}`;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleXButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteBaekjoon(index));
    setIsDeleteModalOpen(false);
  };

  const handleCancelButtonClick = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <li className={cx(styles.baekjoonElementWrapper, tierClass)}>
      <a href={`https://www.acmicpc.net/problem/${item.id}`} target='_blank' rel='noreferrer'>
        <div className={styles.baekjoonElementLeft}>
          {solvedacIcon(item.tier)}
          <p className={styles.baekjoonID}>{item.id}</p>
          <p className={styles.baekjoonProblem}>{item.problem}</p>
        </div>
      </a>
      <button type='button' className={styles.baekjoonXButton} onClick={handleXButtonClick}>
        <XIcon />
      </button>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={item.problem} setIsDeleteModalOpen={setIsDeleteModalOpen}>
          <>
            <Button type='button' onClick={handleDeleteButtonClick}>
              확인
            </Button>
            <Button type='button' onClick={handleCancelButtonClick}>
              취소
            </Button>
          </>
        </DeleteConfirmModal>
      )}
    </li>
  );
};

export default BaekjoonListElement;
