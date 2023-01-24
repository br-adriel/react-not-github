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

const images = [
  'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1674601658~exp=1674602258~hmac=e93af533e61e59091dd8d3447bb05c2df4096a8f1aa312411847b9dab36bb990',
  'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?w=740&t=st=1674601667~exp=1674602267~hmac=ca389aaabeb87367c4b93e751a0eed2b8cf694a303148e6d4b34547463fba2b2',
  'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1674601676~exp=1674602276~hmac=4324b456014d8846cbaf30843ef48123c64f48cc157686de291fc9f731c2cd09',
  'https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1674601683~exp=1674602283~hmac=13d05585af52bb025e1cc828f6ba8da7e252130d2e4c0678d7b2392f04ed966e',
];

const Notification: React.FC<IProps> = ({ type }) => {
  return (
    <Wrapper type={type}>
      <Icon
        type={type}
        src={images[Math.floor(Math.random() * images.length)]}
      />
      <Content>
        {type !== 'response' ? null : <ResponseNotification />}
        {type !== 'follow' ? null : (
          <FollowNotification
            img={images[Math.floor(Math.random() * images.length)]}
          />
        )}
        {type !== 'notification' ? null : (
          <NewTweetNotification
            img={images[Math.floor(Math.random() * images.length)]}
          />
        )}
        {type !== 'like' ? null : (
          <LikeNotification
            img={images[Math.floor(Math.random() * images.length)]}
          />
        )}
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
