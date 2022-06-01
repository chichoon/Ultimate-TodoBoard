import { IBaekjoonItem } from 'types/information.d';
import axios from 'axios';

const getBaekjoonProblem = (problemId: number) =>
  axios
    .get('https://solved.ac/api/v3/problem/show', {
      params: {
        problemId,
      },
    })
    .then((response) => {
      const newData: IBaekjoonItem = {
        id: problemId,
        problem: response.data.titleKo,
        tier: Number(response.data.level),
      };
      return newData;
    });

export default getBaekjoonProblem;
