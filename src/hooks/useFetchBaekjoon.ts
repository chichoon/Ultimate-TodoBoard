import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { getProblemID } from 'router/Dashboard/BaekjoonContainer/states/problemID';
import { useAppSelector, useAppDispatch } from 'hooks';
import { getBaekjoonProblem } from 'services';
import { addBaekjoon, getBaekjoonItems } from 'states/information';
import { setError } from 'states/error';

export const useFetchBaekjoon = () => {
  const dispatch = useAppDispatch();
  const info = useAppSelector(getBaekjoonItems);
  const problemID = useAppSelector(getProblemID);

  useQuery(['baekjoonProblem', problemID], () => getBaekjoonProblem(problemID), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    enabled: problemID !== 0 && info.length < 20,
    cacheTime: 60000,
    retry: false,
    onSuccess: (response) => {
      dispatch(addBaekjoon(response));
    },
    onError: (error: AxiosError<string>) => {
      if (!error.response) dispatch(setError({ status: 0, data: 'Unknown Error' }));
      else
        dispatch(
          setError({
            status: error.response.status,
            data: error.response.data ?? '',
          })
        );
    },
  });
};
