import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInGoogle, SignInWithEmail } from '../../utils/auth';
import * as S from './AuthForm.style';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const formSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== password2) {
      alert('As senhas são diferentes');
      return;
    }

    await SignInWithEmail(email, name, password);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <h2>Entre hoje mesmo para o Twitter</h2>
        <button type='button' onClick={signInGoogle}>
          <FcGoogle />
          <p>Inscrever-se no Google</p>
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
            id='emailSignup'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            name='displayName'
            id='nameSignup'
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='password'
            name='senha'
            id='senhasignup'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            name='senha2'
            id='senha2signup'
            placeholder='Confirmação de senha'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button type='submit'>Cadastrar-se</button>
        </form>
        <p>
          Já tem uma conta? <a href=''>Entre</a>
        </p>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default SignUpForm;
