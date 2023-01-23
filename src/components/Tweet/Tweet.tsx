import { BsHeartFill } from 'react-icons/bs';
import TweetAuthor from './TweetAuthor';
import TweetActions from './TweetActions';
import * as S from './style';
import { TweetType } from '../../global/types';

const Tweet = ({ tweet }: { tweet: TweetType }) => {
  return (
    <S.Wrapper>
      <S.Interaction>
        {tweet.isRetweet ? (
          <>
            <BsHeartFill />
            <p>Fulano deu retweet</p>
          </>
        ) : null}
      </S.Interaction>
      <S.Content>
        <S.ProfilePicture
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          width='48px'
          height='48px'
        />
        <div>
          <TweetAuthor />
          <p>{tweet.content}</p>
          <TweetActions
            likes={tweet.likes.length}
            retweets={tweet.retweetsCount}
          />
        </div>
      </S.Content>
    </S.Wrapper>
  );
};

export default Tweet;
