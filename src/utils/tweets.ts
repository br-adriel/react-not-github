import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { TweetType, TweetWithAuthorType, UserType } from '../global/types';
import { db } from '../services/firebase';
import { store } from '../store';

export const createTweet = async (content: string) => {
  const { auth } = store.getState();
  const { user } = auth;

  if (user) {
    const collectionRef = collection(db, 'users', user.uid, 'posts');
    await addDoc(collectionRef, {
      content,
      timestamp: serverTimestamp(),
      likes: [],
      retweetsCount: 0,
      isRetweet: false,
      author: user.uid,
    });
  }
};

export const getTweet = async (document: any) => {
  const tweet: TweetType = {
    ...document.data(),
    id: document.id,
  };

  const userRef = doc(db, 'users', tweet.author);
  const authorInfo = await getDoc(userRef);
  const data = authorInfo.data() as UserType;

  let retweeterData = null;
  if (tweet.isRetweet && tweet.retweeter) {
    const retweeterRef = doc(db, 'users', tweet.retweeter.uid);
    const retweeterInfo = await getDoc(retweeterRef);
    retweeterData = retweeterInfo.data() as UserType;
  }

  return {
    ...tweet,
    author: {
      displayName: data.displayName,
      email: data.email,
      photoURL: data.photoURL,
      uid: data.uid,
    },
    retweeter: retweeterData,
  } as TweetWithAuthorType;
};
