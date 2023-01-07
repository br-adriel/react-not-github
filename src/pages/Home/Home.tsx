import { BsStars } from 'react-icons/bs';
import CriarTweet from '../../components/CreateTweet';
import Tweet from '../../components/Tweet';
import * as S from './style';

const Home = () => {
  return (
    <S.Feed>
      <S.Title>
        <h2>Página inicial</h2>
        <a href=''>
          <BsStars />
        </a>
      </S.Title>
      <CriarTweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </S.Feed>
  );
};

export default Home;
