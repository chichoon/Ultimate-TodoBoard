import { Button, DeleteConfirmModal } from 'components';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { resetBaekjoon, resetDDay, resetInfo, resetShortcut } from 'states/information';
import { resetTodo } from 'states/todo';

import styles from './resetAppElement.module.scss';

interface IProps {
  type: 'todo' | 'baekjoon' | 'dday' | 'shortcut' | 'all';
}

const ResetAppListElement = ({ type }: IProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const labelStr = {
    todo: '할 일 초기화',
    baekjoon: '백준 문제 초기화',
    dday: '디데이 초기화',
    shortcut: '바로가기 초기화',
    all: '전체 초기화',
  }[type];

  const dispatcher = {
    todo: resetTodo(),
    baekjoon: resetBaekjoon(),
    dday: resetDDay(),
    shortcut: resetShortcut(),
    all: resetInfo(),
  }[type];
  const dispatch = useAppDispatch();

  const handleModalOpenButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    dispatch(dispatcher);
    setIsDeleteModalOpen(false);
  };

  const handleCancelButtonClick = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <li className={styles.resetAppListWrapper}>
      <p>{labelStr}</p>
      <Button type='button' onClick={handleModalOpenButtonClick}>
        확인
      </Button>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={labelStr} setIsDeleteModalOpen={setIsDeleteModalOpen}>
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

export default ResetAppListElement;
