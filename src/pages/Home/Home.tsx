import { useContext } from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import Explore from '../Explore';
import Feed from './Feed';
import * as S from './style';

const Home = () => {
  const { user } = useContext(AuthGoogleContext);
  if (!user) return <Explore />;
  return (
    <S.Wrapper>
      <Header />
      <Feed />
      <Aside />
    </S.Wrapper>
  );
};

export default Home;
