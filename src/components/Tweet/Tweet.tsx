import { BsHeartFill } from 'react-icons/bs';
import TweetAuthor from './TweetAuthor';
import TweetActions from './TweetActions';
import * as S from './style';

const Tweet = () => {
  return (
    <S.Wrapper>
      <S.Interaction>
        <BsHeartFill />
        <p>Fulano curtiu</p>
      </S.Interaction>
      <S.Content>
        <S.ProfilePicture
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          width='48px'
          height='48px'
        />
        <div>
          <TweetAuthor />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut
            unde rerum recusandae veritatis consequatur officia fugiat cum
            libero! Enim.
          </p>
          <TweetActions />
        </div>
      </S.Content>
    </S.Wrapper>
  );
};

export default Tweet;
