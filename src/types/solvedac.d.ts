import { IBadge } from './solvedacResponse.d';

export interface ISolvedacData {
  handle: string;
  bio: string;
  badge: IBadge;
  profileImageUrl: string;
  solvedCount: number;
  tier: number;
  rank: number;
}
