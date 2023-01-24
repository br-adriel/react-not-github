import dayjs from 'dayjs';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import * as S from './style';

interface Props {
  displayName: string;
  email: string;
  timestamp?: Date;
}

const TweetAuthor = ({ displayName, email, timestamp }: Props) => {
  return (
    <S.Author>
      <p>
        <a>{displayName}</a>
        <span>
          {email} <BsDot /> {dayjs(timestamp).fromNow()}
        </span>
      </p>
      <a href=''>
        <BsThreeDots />
      </a>
    </S.Author>
  );
};

export default TweetAuthor;
