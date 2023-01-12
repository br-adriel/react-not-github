import { FiSettings } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import Aside from '../../components/Aside';
import { Container600px } from '../../components/Container';
import Header from '../../components/Header';
import HorizontalNavigation from '../../components/HorizontalNavigation';
import * as S from './style';

const Notifications = () => {
  return (
    <S.Wrapper>
      <Header />
      <Container600px>
        <S.Content>
          <S.Heading>
            <S.Title>
              <h2>Notificações</h2>
              <S.Settings>
                <a href=''>
                  <FiSettings />
                </a>
              </S.Settings>
            </S.Title>
            <HorizontalNavigation>
              <NavLink to={'/notifications/'}>
                <div>
                  <span>Tudo</span>
                  <div></div>
                </div>
              </NavLink>
              <NavLink to='verified'>
                <div>
                  <span>Verificadas</span>
                  <div></div>
                </div>
              </NavLink>
              <NavLink to='mentions'>
                <div>
                  <span>Menções</span>
                  <div></div>
                </div>
              </NavLink>
            </HorizontalNavigation>
          </S.Heading>
          <Outlet />
        </S.Content>
      </Container600px>
      <Aside />
    </S.Wrapper>
  );
};

export default Notifications;
