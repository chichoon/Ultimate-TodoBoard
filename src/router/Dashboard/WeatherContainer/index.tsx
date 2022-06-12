import { Suspense } from 'react';
import cx from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';

import WeatherContainerInner from './WeatherContainerInner';
import { Error, Loading } from 'components';

import styles from './weatherContainer.module.scss';

const WeatherContainer = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <Error headerTitle='날씨' error={error} />;

  return (
    <li className={cx(styles.weatherWrapper, 'listContainer')}>
      <ErrorBoundary fallbackRender={handleErrorFallback}>
        <Suspense fallback={<Loading headerTitle='날씨' />}>
          <WeatherContainerInner />
        </Suspense>
      </ErrorBoundary>
    </li>
  );
};

export default WeatherContainer;

// TODO: weather container 완성
