import { Suspense } from 'react';
import cx from 'classnames';

import WeatherContainerInner from './WeatherContainerInner';
import { Loading } from 'components';

import styles from './weatherContainer.module.scss';

const WeatherContainer = () => {
  return (
    <div className={cx(styles.weatherWrapper, 'listContainer')}>
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
    </div>
  );
};

export default WeatherContainer;

// TODO: weather container 완성
