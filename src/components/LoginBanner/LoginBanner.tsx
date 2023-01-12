import { useContext } from 'react';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import { Container920px } from '../Container';
import * as S from './style';

const LoginBanner = () => {
  const { user } = useContext(AuthGoogleContext);

  if (user) return null;
  return (
    <S.Wrapper>
      <Container920px>
        <S.TextContent>
          <h2>Não perca o que está acontecendo</h2>
          <p>As pessoas que usam o Twitter são as primeiras a saber.</p>
        </S.TextContent>
        <S.BtnGroup>
          <button type='button'>Entrar</button>
          <button type='button'>Inscrever-se</button>
        </S.BtnGroup>
      </Container920px>
    </S.Wrapper>
  );
};

export default LoginBanner;
