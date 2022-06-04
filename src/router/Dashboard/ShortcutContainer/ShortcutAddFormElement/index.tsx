import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { useMount } from 'react-use';
import cx from 'classnames';

import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addShortcut, getShortcut } from 'states/information';

import styles from './shortcutAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const ShortcutAddFormElement = ({ setIsAddFormShown }: IProps) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [isLimit, setIsLimit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const shortcutList = useAppSelector(getShortcut);
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (shortcutList.length >= 10) {
      setIsLimit(true);
      return;
    }
    dispatch(
      addShortcut({
        title,
        url,
      })
    );
    setIsAddFormShown(false);
  };

  useMount(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  return (
    <div className={cx('listContainerAddForm')}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.shortcutInputWrapper}>
          <input
            type='text'
            required
            name='title'
            value={title}
            onChange={handleTitleChange}
            ref={inputRef}
            placeholder='바로가기 이름'
          />
          <input type='text' required name='url' value={url} onChange={handleUrlChange} placeholder='바로가기 URL' />
          {isLimit && <span>바로가기는 10개까지 등록 가능합니다.</span>}
        </div>
        <Button type='submit'>추가</Button>
      </form>
    </div>
  );
};

export default ShortcutAddFormElement;
