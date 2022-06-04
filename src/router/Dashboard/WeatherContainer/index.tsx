import { Suspense } from 'react';
import cx from 'classnames';

import WeatherContainerInner from './WeatherContainerInner';
import { Error, Loading } from 'components';

import styles from './weatherContainer.module.scss';
import { ErrorBoundary } from 'react-error-boundary';

const WeatherContainer = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => (
    <>
      <div className={cx('listContainerHeader')}>
        <h3>날씨</h3>
      </div>
      <Error error={error} />
    </>
  );

  return (
    <div className={cx(styles.weatherWrapper, 'listContainer')}>
      <ErrorBoundary fallbackRender={handleErrorFallback}>
        <Suspense
          fallback={
            <>
              <div className={cx('listContainerHeader')}>
                <h3>날씨</h3>
              </div>
              <Loading />
            </>
          }
        >
          <WeatherContainerInner />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default WeatherContainer;

// TODO: weather container 완성
