import { BsDot, BsThreeDots } from 'react-icons/bs';
import * as S from './style';

const TweetAuthor = () => {
  return (
    <S.Author>
      <p>
        <a>Fulano</a>
        <span>
          @fulano <BsDot /> 6h
        </span>
      </p>
      <a href=''>
        <BsThreeDots />
      </a>
    </S.Author>
  );
};

export default TweetAuthor;
