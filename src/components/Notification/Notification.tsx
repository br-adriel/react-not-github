import { NotificationType } from '../../global/types';
import FollowNotification from './FollowNotification';
import Icon from './Icon';
import LikeNotification from './LikeNotification';
import NewTweetNotification from './NewTweetNotification';
import ResponseNotification from './ResponseNotification';
import { Content, Wrapper } from './style';

interface IProps {
  type: NotificationType;
}

const Notification: React.FC<IProps> = ({ type }) => {
  return (
    <Wrapper type={type}>
      <Icon
        type={type}
        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      />
      <Content>
        {type !== 'response' ? null : <ResponseNotification />}
        {type !== 'follow' ? null : <FollowNotification />}
        {type !== 'notification' ? null : <NewTweetNotification />}
        {type !== 'like' ? null : <LikeNotification />}
        {type !== 'device' ? null : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            delectus?
          </p>
        )}
      </Content>
    </Wrapper>
  );
};

export default Notification;
