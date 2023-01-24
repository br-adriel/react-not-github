import { NotificationText, ProfileImage } from '../style';

interface Props {
  img: string;
}

const FollowNotification = ({ img }: Props) => {
  return (
    <>
      <ProfileImage>
        <a href=''>
          <img src={img} alt='' width='32px' height='32px' />
        </a>
      </ProfileImage>
      <NotificationText>
        <a href=''>Lorem Ipsum</a> seguiu você
      </NotificationText>
    </>
  );
};

export default FollowNotification;
