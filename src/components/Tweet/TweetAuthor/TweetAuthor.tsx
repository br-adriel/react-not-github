import dayjs from 'dayjs';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import * as S from './style';

interface Props {
  displayName: string;
  timestamp?: Date;
}

const TweetAuthor = ({ displayName, timestamp }: Props) => {
  return (
    <S.Author>
      <p>
        <a>{displayName}</a>
        <span>
          @fulano <BsDot /> {dayjs(timestamp).fromNow()}
        </span>
      </p>
      <a href=''>
        <BsThreeDots />
      </a>
    </S.Author>
  );
};

export default TweetAuthor;
