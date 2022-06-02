import { useState } from 'react';
import dayjs from 'dayjs';

import { useAppDispatch } from 'hooks';
import { IDDay } from 'types/information';
import { deleteDday } from 'states/information';
import { DeleteConfirmModal } from 'router/Dashboard/_shared';

import { XIcon } from 'assets/svgs';
import styles from './ddayListElement.module.scss';

interface IProps {
  item: IDDay;
  index: number;
}

const today = dayjs();

const DDayListElement = ({ item, index }: IProps) => {
  const dday = dayjs(item.date);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleXButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteDday(index));
    setIsDeleteModalOpen(false);
  };

  const handleCancelButtonClick = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.ddayElementWrapper}>
      <p className={styles.ddayEmoji}>{item.icon}</p>
      <dl className={styles.ddayInfoContainer}>
        <dt>{item.title}</dt>
        <dd>{dday.diff(today)}</dd>
      </dl>
      <button type='button' onClick={handleXButtonClick}>
        <XIcon />
      </button>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={item.title} setIsDeleteModalOpen={setIsDeleteModalOpen}>
          <>
            <button type='button' onClick={handleDeleteButtonClick}>
              확인
            </button>
            <button type='button' onClick={handleCancelButtonClick}>
              취소
            </button>
          </>
        </DeleteConfirmModal>
      )}
    </div>
  );
};

export default DDayListElement;
