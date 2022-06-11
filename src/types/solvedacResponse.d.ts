export interface ISolvedacResponse {
  handle: string;
  bio: string;
  organizations: IOrganization[];
  badge: IBadge;
  background: IBackground;
  profileImageUrl: string;
  solvedCount: number;
  voteCount: number;
  exp: number;
  tier: number;
  rating: number;
  ratingByProblemsSum: number;
  ratingByClass: number;
  ratingBySolvedCount: number;
  ratingByVoteCount: number;
  class: number;
  classDecoration: string;
  rivalCount: number;
  reverseRivalCount: number;
  maxStreak: number;
  rank: number;
  isRival: boolean;
  isReverseRival: boolean;
}

export interface IBackground {
  backgroundId: string;
  backgroundImageUrl: string;
  author: string;
  authorUrl: string;
  displayName: string;
  displayDescription: string;
}

export interface IBadge {
  badgeId: string;
  badgeImageUrl: string;
  displayName: string;
  displayDescription: string;
}

export interface IOrganization {
  organizationId: number;
  name: string;
  type: string;
  rating: number;
  userCount: number;
  voteCount: number;
  solvedCount: number;
  color: string;
}
