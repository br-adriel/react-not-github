import { useContext } from 'react';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import AsideWhoToFollow from '../../components/AsideWhoToFollow';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewOnTweeter from '../../components/NewOnTwitter';
import SearchForm from '../../components/SearchForm';
import SidebarWrapper from '../../components/SideBarWrapper';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import * as S from './style';

const Explore = () => {
  const { user } = useContext(AuthGoogleContext);
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.TopSection>
          <S.SearchWrapper>
            <SearchForm />
            <S.SettingsButtonWrapper>
              <button>
                <FiSettings />
              </button>
            </S.SettingsButtonWrapper>
          </S.SearchWrapper>
          <S.Navigation>
            <NavLink to={''}>
              <div>
                <span>Assuntos do momento</span>
                <div></div>
              </div>
            </NavLink>
          </S.Navigation>
        </S.TopSection>
        <S.Trending sidebar={false} />
        <S.Trending sidebar={false} />
        <S.Trending sidebar={false} />
        <S.Trending sidebar={false} />
        <S.Trending sidebar={false} />
      </S.Container>
      <SidebarWrapper>
        {user ? <AsideWhoToFollow /> : <NewOnTweeter />}
        <Footer />
      </SidebarWrapper>
    </S.Wrapper>
  );
};

export default Explore;
