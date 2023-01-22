import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { logInWithEmail, signInGoogle } from '../../utils/auth';
import * as S from './AuthForm.style';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = async (e: any) => {
    e.preventDefault();

    await logInWithEmail(email, password);
    setPassword('');
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <h2>Entrar no Twitter</h2>
        <button type='button' onClick={signInGoogle}>
          <FcGoogle />
          <p>Fazer login com o Google</p>
        </button>
        <S.Separator>
          <hr />
          <span>ou</span>
          <hr />
        </S.Separator>
        <form
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            name='senha'
            id='senha'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Entrar</button>
        </form>
        <p>
          Não tem uma conta? <a href=''>Inscreva-se</a>
        </p>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default AuthForm;
