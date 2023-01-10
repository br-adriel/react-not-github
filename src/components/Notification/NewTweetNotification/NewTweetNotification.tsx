import { NotificationText, ProfileImage } from '../style';

const NewTweetNotification = () => {
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
        Novas notificações de <a href=''>Fulaninho silva</a>
      </NotificationText>
    </>
  );
};

export default NewTweetNotification;
