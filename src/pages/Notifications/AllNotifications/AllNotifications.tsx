import Notification from '../../../components/Notification';

const AllNotifications = () => {
  return (
    <>
      <Notification type='notification' />
      <Notification type='like' />
      <Notification type='device' />
      <Notification type='follow' />
      <Notification type='response' />
      <Notification type='like' />
      <Notification type='like' />
    </>
  );
};

export default AllNotifications;
