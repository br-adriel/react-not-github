import { TweetActions, TweetAuthor } from '../../Tweet';
import * as S from './style';

const ResponseNotification = () => {
  return (
    <>
      <TweetAuthor />
      <S.ResponseTo>
        Em resposta a <a href=''>@fulaninho</a>
      </S.ResponseTo>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi
        expedita accusamus quos laboriosam iusto, maxime labore sequi iure
        laborum.
      </p>
      <TweetActions />
    </>
  );
};

export default ResponseNotification;
