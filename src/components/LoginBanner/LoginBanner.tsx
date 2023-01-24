import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import { LoginForm, SignUpForm } from '../AuthForm';
import Modal from '../AuthModal/Modal';
import { Container920px } from '../Container';
import * as S from './style';

const LoginBanner = () => {
  const { user } = useSelector(selectAuth);

  if (user) return null;
  return (
    <S.Wrapper>
      <Container920px>
        <S.TextContent>
          <h2>Não perca o que está acontecendo</h2>
          <p>As pessoas que usam o Twitter são as primeiras a saber.</p>
        </S.TextContent>
        <S.BtnGroup>
          <Modal triggerContent={'Entrar'}>
            <LoginForm />
          </Modal>
          <Modal triggerContent={'Inscrever-se'}>
            <SignUpForm />
          </Modal>
        </S.BtnGroup>
      </Container920px>
    </S.Wrapper>
  );
};

export default LoginBanner;
