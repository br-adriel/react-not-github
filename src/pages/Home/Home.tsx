import Aside from './Aside';
import Feed from './Feed';
import * as S from './style';

const Home = () => {
  return (
    <S.Wrapper>
      <Feed />
      <Aside />
    </S.Wrapper>
  );
};

export default Home;
