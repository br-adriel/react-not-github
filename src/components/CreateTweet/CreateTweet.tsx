import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import * as S from './style';
import TweetForm from './TweetForm';

const CreateTweet = () => {
  const { user } = useSelector(selectAuth);
  if (!user) return null;
  return (
    <S.Wrapper>
      <img src={user.photoURL ?? '#'} alt='' width='48px' height='48px' />
      <TweetForm onSubmit={(e) => e.preventDefault()} />
    </S.Wrapper>
  );
};

export default CreateTweet;
