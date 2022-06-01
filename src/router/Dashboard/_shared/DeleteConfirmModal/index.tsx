import styles from './deleteConfirmModal.module.scss';

interface IProps {
  title: string;
  children: JSX.Element;
}

const DeleteConfirmModal = ({ title, children }: IProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.deleteModalWrapper}>
        <header>
          <p>정말로 삭제하시겠습니까?</p>
        </header>
        <main>
          <p>{title}</p>
          <div className={styles.buttonWrapper}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
