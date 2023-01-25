import { Helmet } from 'react-helmet-async';
import { FiSettings } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AsideWhoToFollow from '../../components/AsideWhoToFollow';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewOnTweeter from '../../components/NewOnTwitter';
import SearchForm from '../../components/SearchForm';
import SidebarWrapper from '../../components/SidebarWrapper';
import { selectAuth } from '../../store/authSlice';
import * as S from './style';

const Explore = () => {
  const { user } = useSelector(selectAuth);

  return (
    <S.Wrapper>
      <Helmet>
        <title>Explorar / Not twitter</title>
      </Helmet>

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
