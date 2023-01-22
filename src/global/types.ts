export type Theme = {
  bg: string;
  bg2: string;
  bg2Hover: string;
  text: string;
  textAlt: string;
  bgHover: string;
  accent: string;
  like: string;
  retweet: string;
  accentHover: string;
  likeHover: string;
  retweetHover: string;
  brandColor: string;
};

export type TweetType = {
  id: string;
  content: string;
  timestamp: string;
  likes: string[];
  retweetsCount: number;
  isRetweet: boolean;
  author: string;
};

export type NotificationType =
  | 'notification'
  | 'like'
  | 'response'
  | 'device'
  | 'follow';
