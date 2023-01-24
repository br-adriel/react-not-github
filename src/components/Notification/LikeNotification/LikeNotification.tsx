import { NotificationText, ProfileImage } from '../style';
import { TweetText } from './style';

interface Props {
  img: string;
}

const LikeNotification = ({ img }: Props) => {
  return (
    <>
      <ProfileImage>
        <a href=''>
          <img src={img} alt='' width='32px' height='32px' />
        </a>
      </ProfileImage>
      <NotificationText>
        <a href=''>Lorem Ipsum</a> curtiu seu tweet
      </NotificationText>
      <TweetText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        perferendis.
      </TweetText>
    </>
  );
};

export default LikeNotification;
