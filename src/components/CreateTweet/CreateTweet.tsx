import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import { createTweet } from '../../utils/tweets';
import * as S from './style';
import TweetForm from './TweetForm';

const CreateTweet = () => {
  const { user } = useSelector(selectAuth);

  const formSubmit = async (e: any) => {
    e.preventDefault();

    const content: string = e.target['tweet-content'].value.trim();
    await createTweet(content);
  };

  if (!user) return null;
  return (
    <S.Wrapper>
      <img src={user.photoURL ?? '#'} alt='' width='48px' height='48px' />
      <TweetForm onSubmit={(e) => formSubmit(e)} />
    </S.Wrapper>
  );
};

export default CreateTweet;
