import cx from 'classnames';
import { SolvedacIcon } from 'components';

import { useFetchSolvedac } from 'hooks';

import styles from './solvedacContainerInner.module.scss';

const SolvedacContainerInner = () => {
  const { data } = useFetchSolvedac();
  const tierClass = `tier${Math.floor(((data?.tier ?? 0) + 4) / 5)}`;

  return (
    <>
      <div className={cx('listContainerHeader')}>
        <h3>{data?.handle ?? '선택한 계정'}의 Solved.ac 현황</h3>
      </div>
      <div className={styles.solvedacContainerInnerWrapper}>
        <div className={cx(styles.solvedacProfileImage, tierClass)}>
          <img src={data?.profileImageUrl} alt='solvedac-profile' />
          <SolvedacIcon tier={data?.tier ?? 0} />
        </div>
        <div className={styles.solvedacContainerProfile}>
          <dl>
            <dt>{data?.handle ?? ''}</dt>
            <dd>{data?.bio ?? ''}</dd>
          </dl>
          <img src={data?.badge.badgeImageUrl} alt='solvedac-profile-badge' />
        </div>
        <div className={styles.solvedacRankings}>
          <dl>
            <dt>푼 문제 수</dt>
            <dd>{data?.solvedCount ?? 0}</dd>
          </dl>
          <dl>
            <dt>순위</dt>
            <dd>{data?.rank ?? 0}</dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default SolvedacContainerInner;
