import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import Tweet from '../../components/Tweet';
import { TweetWithAuthorType } from '../../global/types';
import { db } from '../../services/firebase';
import { selectAuth } from '../../store/authSlice';
import { getTweet } from '../../utils/tweets';
import StickyTop from './StickyTop';
import * as S from './style';

const Profile = () => {
  const { user } = useSelector(selectAuth);
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState<TweetWithAuthorType[]>([]);

  useEffect(() => {
    const loadTweets = async () => {
      const q = query(
        collection(db, 'users', user!.uid, 'posts'),
        orderBy('timestamp', 'desc')
      );

      onSnapshot(q, async (snapshot) => {
        const fetchedTweets: TweetWithAuthorType[] = await Promise.all(
          snapshot.docs.map(async (doc) => getTweet(doc))
        );
        setTweets(fetchedTweets);
      });
      setLoading(false);
    };

    loadTweets();
  }, []);

  return (
    <S.Wrapper>
      <Helmet>
        <title>{user?.displayName} / Not twitter</title>
      </Helmet>

      <Header />
      <S.Container600>
        <StickyTop displayName={user!.displayName} tweetsCount={20} />
        <S.Content>
          <S.UserBackground />
          <S.UserImageWrapper>
            <S.ProfilePic
              src={user?.photoURL || '#'}
              alt='Sua foto de perfil'
            />
            <button>Configurar perfil</button>
          </S.UserImageWrapper>
          <S.UserStatistic>
            <div>
              <h2>{user?.displayName}</h2>
              <h3>{user?.email}</h3>
            </div>

            <div>
              <p>
                <span>2</span> seguindo
              </p>
              <p>
                <span>10</span> seguidores
              </p>
            </div>
          </S.UserStatistic>
          <S.Navigation>
            <NavLink to='/profile'>
              <div>
                <span>Tweets</span>
                <div></div>
              </div>
            </NavLink>
            <a href='/#/profile'>
              <div>
                <span>Tweets e respostas</span>
                <div></div>
              </div>
            </a>
            <a href='/#/profile'>
              <div>
                <span>Mídias</span>
                <div></div>
              </div>
            </a>
            <a href='/#/profile'>
              <div>
                <span>Curtidas</span>
                <div></div>
              </div>
            </a>
          </S.Navigation>
          <S.Tweets>
            {loading
              ? 'LOADING...'
              : tweets.map((tweet) => {
                  return <Tweet tweet={tweet} key={tweet.id} />;
                })}
          </S.Tweets>
        </S.Content>
      </S.Container600>
      <Aside />
    </S.Wrapper>
  );
};

export default Profile;
