import { useState } from 'react';
import dayjs from 'dayjs';

import { useAppDispatch } from 'hooks';
import { IDDay } from 'types/information';
import { deleteDday } from 'states/information';
import { DeleteConfirmModal, Button } from 'components';

import { XIcon } from 'assets/svgs';
import styles from './ddayListElement.module.scss';

interface IProps {
  item: IDDay;
  index: number;
}

const DDayListElement = ({ item, index }: IProps) => {
  const dday = dayjs(dayjs().format('YYYY-MM-DD')).diff(item.date, 'd');

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
    <li style={{ borderColor: item.color }} className={styles.ddayElementWrapper}>
      <p className={styles.ddayEmoji}>{item.icon}</p>
      <dl className={styles.ddayInfoContainer}>
        <dt>{item.title}</dt>
        <dd>{dday > 0 ? `+${dday}일` : `${dday}일`}</dd>
      </dl>
      <button type='button' onClick={handleXButtonClick}>
        <XIcon />
      </button>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={item.title} setIsDeleteModalOpen={setIsDeleteModalOpen}>
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

export default DDayListElement;
