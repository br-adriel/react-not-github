import { TweetActions, TweetAuthor } from '../../Tweet';
import * as S from './style';

const ResponseNotification = () => {
  return (
    <>
      <TweetAuthor displayName='Lorem Ipsum' email='elpmaxe@email.com' />
      <S.ResponseTo>
        Em resposta a <a href='#'>example@email.com</a>
      </S.ResponseTo>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi
        expedita accusamus quos laboriosam iusto, maxime labore sequi iure
        laborum.
      </p>
      <TweetActions likes={20} retweets={2} />
    </>
  );
};

export default ResponseNotification;
