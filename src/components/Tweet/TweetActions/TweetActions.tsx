import { AiOutlineRetweet } from 'react-icons/ai';
import { BiBarChart, BiComment } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import * as S from './style';

const TweetActions = () => {
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
      </div>
      <div>
        <div>
          <BsHeart />
        </div>
        <p>1234</p>
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
