import { ISolvedacResponse } from '../types/solvedacResponse.d';
import axios from 'axios';
import { ISolvedacData } from 'types/solvedac';

const getSolvedacInfo = (solvedacID: string) =>
  axios
    .get('https://solved.ac/api/v3/user/show', {
      params: { handle: solvedacID },
    })
    .then(({ data }: { data: ISolvedacResponse }) => {
      const newData: ISolvedacData = {
        handle: data.handle,
        bio: data.bio,
        badge: data.badge,
        profileImageUrl: data.profileImageUrl,
        solvedCount: data.solvedCount,
        tier: data.tier,
        rank: data.rank,
      };
      return newData;
    });

export default getSolvedacInfo;
