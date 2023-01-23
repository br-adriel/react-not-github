import { Timestamp } from 'firebase/firestore';

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

export interface UserType {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export interface TweetType {
  id: string;
  original?: string;
  content: string;
  timestamp: Timestamp;
  likes: string[];
  retweetsCount: number;
  isRetweet: boolean;
  retweeter?: {
    uid: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
  };
  author: string;
}

export interface TweetWithAuthorType extends Omit<TweetType, 'author'> {
  author: UserType;
}

export type NotificationType =
  | 'notification'
  | 'like'
  | 'response'
  | 'device'
  | 'follow';
