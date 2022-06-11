import { useQuery } from 'react-query';

import { getWeather } from 'states/settings';
import { useAppSelector } from 'hooks';
import { getWeatherInfo } from 'services';

export const useFetchWeather = () => {
  const { lat, lon } = useAppSelector(getWeather);
  const { data } = useQuery(['WeatherInfos', lat, lon], () => getWeatherInfo(lat, lon), {
    refetchOnWindowFocus: false,
    refetchInterval: 600000, // 10분
    staleTime: 60000,
    suspense: true,
    retry: 1,
    useErrorBoundary: true,
  });

  return { data };
};
