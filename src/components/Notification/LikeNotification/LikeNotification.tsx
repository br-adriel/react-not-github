import { NotificationText, ProfileImage } from '../style';
import { TweetText } from './style';
const LikeNotification = () => {
  return (
    <>
      <ProfileImage>
        <a href=''>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            alt=''
            width='32px'
            height='32px'
          />
        </a>
      </ProfileImage>
      <NotificationText>
        <a href=''>Fulaninho silva</a> curtiu seu tweet
      </NotificationText>
      <TweetText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        perferendis.
      </TweetText>
    </>
  );
};

export default LikeNotification;
