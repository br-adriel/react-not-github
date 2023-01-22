import { FcGoogle } from 'react-icons/fc';
import { signInGoogle } from '../../utils/auth';
import * as S from './style';

const NewOnTweeter = () => {
  return (
    <S.Wrapper>
      <h2>Novo no Twitter?</h2>
      <p>Inscreva-se para ter sua própria timeline personalizada!</p>
      <button type='button' onClick={signInGoogle}>
        <FcGoogle />
        <span>Inscrever-se no Google</span>
      </button>
    </S.Wrapper>
  );
};

export default NewOnTweeter;
