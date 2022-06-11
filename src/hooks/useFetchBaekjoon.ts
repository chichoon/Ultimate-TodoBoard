import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { getProblemID } from 'states/problemID';
import { addBaekjoon, getBaekjoonItems } from 'states/information';
import { setError } from 'states/error';
import { useAppSelector, useAppDispatch } from 'hooks';
import { getBaekjoonProblem } from 'services';

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
