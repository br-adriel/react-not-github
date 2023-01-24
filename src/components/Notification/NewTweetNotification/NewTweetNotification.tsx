import { NotificationText, ProfileImage } from '../style';

interface Props {
  img: string;
}

const NewTweetNotification = ({ img }: Props) => {
  return (
    <>
      <ProfileImage>
        <a href=''>
          <img src={img} alt='' width='32px' height='32px' />
        </a>
      </ProfileImage>
      <NotificationText>
        Novas notificações de <a href=''>Lorem Ipsum</a>
      </NotificationText>
    </>
  );
};

export default NewTweetNotification;
