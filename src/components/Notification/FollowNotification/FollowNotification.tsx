import { NotificationText, ProfileImage } from '../style';

const FollowNotification = () => {
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
        <a href=''>Fulaninho silva</a> seguiu você
      </NotificationText>
    </>
  );
};

export default FollowNotification;
