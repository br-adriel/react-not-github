import {
  collectionGroup,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { Container600px } from '../../../components/Container';
import CriarTweet from '../../../components/CreateTweet';
import Tweet from '../../../components/Tweet';
import { TweetType } from '../../../global/types';
import { db } from '../../../services/firebase';
import * as S from './style';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    const loadFeed = async () => {
      const q = query(
        collectionGroup(db, 'posts'),
        orderBy('timestamp', 'desc')
      );

      onSnapshot(q, (snapshot) => {
        const fetchedTweets: TweetType[] = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as TweetType;
        });
        setTweets(fetchedTweets);
      });
      setLoading(false);
    };

    loadFeed();
  }, []);

  if (loading) return null;
  return (
    <Container600px>
      <S.Title>
        <h2>Página inicial</h2>
        <div>
          <a href=''>
            <BsStars />
          </a>
        </div>
      </S.Title>
      <CriarTweet />
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </Container600px>
  );
};

export default Feed;
