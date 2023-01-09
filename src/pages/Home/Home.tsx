import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Feed from './Feed';
import * as S from './style';

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Feed />
      <Aside />
    </S.Wrapper>
  );
};

export default Home;
