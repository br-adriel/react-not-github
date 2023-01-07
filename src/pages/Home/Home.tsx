import AsideWhatsHappening from '../../components/AsideWhatsHappening/AsideWhatsHappening';
import Feed from './Feed';
import * as S from './style';

const Home = () => {
  return (
    <S.Wrapper>
      <Feed />
      <AsideWhatsHappening />
    </S.Wrapper>
  );
};

export default Home;
