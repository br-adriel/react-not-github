import { AiOutlineRetweet } from 'react-icons/ai';
import { BiBarChart, BiComment } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import * as S from './style';

interface Props {
  likes: number;
  retweets: number;
}

const TweetActions = ({ likes, retweets }: Props) => {
  return (
    <S.Action>
      <div>
        <div>
          <BiBarChart />
        </div>
      </div>
      <div>
        <div>
          <BiComment />
        </div>
      </div>
      <div>
        <div>
          <AiOutlineRetweet />
        </div>
        <p>{retweets > 0 && retweets}</p>
      </div>
      <div>
        <div>
          <BsHeart />
        </div>
        <p>{likes > 0 && likes}</p>
      </div>
      <div>
        <div>
          <FiShare />
        </div>
      </div>
    </S.Action>
  );
};

export default TweetActions;
