import { BsStars } from 'react-icons/bs';
import { Container600px } from '../../../components/Container';
import CriarTweet from '../../../components/CreateTweet';
import Tweet from '../../../components/Tweet';
import * as S from './style';

const Feed = () => {
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
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Container600px>
  );
};

export default Feed;
