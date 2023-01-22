import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
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
