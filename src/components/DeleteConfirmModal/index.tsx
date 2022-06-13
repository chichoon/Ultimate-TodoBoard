import { Dispatch, SetStateAction, useRef } from 'react';
import { useClickAway } from 'react-use';

import ModalPortal from 'components/modalPortal';

import styles from './deleteConfirmModal.module.scss';

interface IProps {
  title: string;
  children: JSX.Element;
  setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
}

const DeleteConfirmModal = ({ title, children, setIsDeleteModalOpen }: IProps) => {
  const modalRef = useRef(null);

  useClickAway(modalRef, () => {
    setIsDeleteModalOpen(false);
  });

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.deleteModalWrapper} ref={modalRef}>
          <header>
            <p>정말로 삭제하시겠습니까?</p>
          </header>
          <main>
            <p>{title}</p>
            <div className={styles.buttonWrapper}>{children}</div>
          </main>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DeleteConfirmModal;
