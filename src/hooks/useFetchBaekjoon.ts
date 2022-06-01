import { useQuery } from 'react-query';

import { getProblemID } from '../states/problemID';
import { useAppSelector, useAppDispatch } from 'hooks';
import { getBaekjoonProblem } from 'services';
import { addBaekjoon } from 'states/information';

export const useFetchBaekjoon = () => {
  const dispatch = useAppDispatch();
  const problemID = useAppSelector(getProblemID);

  useQuery(['baekjoonProblem', problemID], () => getBaekjoonProblem(problemID), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    enabled: problemID !== 0,
    cacheTime: 60000,
    onSuccess: (response) => {
      dispatch(addBaekjoon(response));
    },
  });
};
