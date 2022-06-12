import { useQuery } from 'react-query';

import { useAppSelector } from 'hooks';
import getSolvedacInfo from 'services/getSolvedacInfo';
import { getSolvedacID } from 'states/settings';

export const useFetchSolvedac = () => {
  const solvedacID = useAppSelector(getSolvedacID);

  const { data } = useQuery(['solvedacInfos', solvedacID], () => getSolvedacInfo(solvedacID), {
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60 * 24, // 1일
    staleTime: 60000,
    suspense: true,
    retry: 1,
    useErrorBoundary: true,
    enabled: solvedacID.length > 0,
  });

  return { data };
};
