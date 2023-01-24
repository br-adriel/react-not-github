import { AiOutlineRetweet } from 'react-icons/ai';
import { TweetWithAuthorType } from '../../global/types';
import * as S from './style';
import TweetActions from './TweetActions';
import TweetAuthor from './TweetAuthor';

const Tweet = ({ tweet }: { tweet: TweetWithAuthorType }) => {
  return (
    <S.Wrapper>
      <S.Interaction>
        {tweet.isRetweet ? (
          <>
            <AiOutlineRetweet />
            <p>{tweet.retweeter?.displayName} deu retweet</p>
          </>
        ) : null}
      </S.Interaction>
      <S.Content>
        <S.ProfilePicture
          src={tweet.author.photoURL}
          alt=''
          width='48px'
          height='48px'
        />
        <div>
          <TweetAuthor
            email={tweet.author.email}
            displayName={tweet.author.displayName}
            timestamp={tweet.timestamp && tweet.timestamp.toDate()}
          />
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
