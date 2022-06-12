import { Suspense } from 'react';
import cx from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';

import { Error, Loading } from 'components';
import SolvedacContainerInner from './SolvedacContainerInner';

import styles from './solvedacContainer.module.scss';

const SolvedacContainer = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <Error headerTitle='Solved.ac 현황' error={error} />;

  return (
    <li className={cx(styles.solvedacWrapper, 'listContainer')}>
      <ErrorBoundary fallbackRender={handleErrorFallback}>
        <Suspense fallback={<Loading headerTitle='Solved.ac 현황' />}>
          <SolvedacContainerInner />
        </Suspense>
      </ErrorBoundary>
    </li>
  );
};

export default SolvedacContainer;
