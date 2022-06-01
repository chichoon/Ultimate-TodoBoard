import { useAppDispatch } from 'hooks';
import { useQuery } from 'react-query';

export const useFetchBaekjoon = (problemID: number) => {
  const dispatch = useAppDispatch();
  useQuery(['baekjoonProblem', problemID], () => getBae);
};
