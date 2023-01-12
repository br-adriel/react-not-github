import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import * as S from './style';

const NewOnTweeter = () => {
  const { signInGoogle } = useContext(AuthGoogleContext);
  return (
    <S.Wrapper>
      <h2>Novo no Twitter?</h2>
      <p>Inscreva-se para ter sua própria timeline personalizada!</p>
      <button type='button' onClick={() => signInGoogle()}>
        <FcGoogle />
        <span>Inscrever-se no Google</span>
      </button>
    </S.Wrapper>
  );
};

export default NewOnTweeter;
