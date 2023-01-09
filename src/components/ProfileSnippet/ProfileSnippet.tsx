import * as S from './style';

const ProfileSnippet = () => {
  return (
    <S.Wrapper>
      <S.Profile>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          width='48px'
          height='48px'
        />
        <div>
          <S.Username>Felipe Neto</S.Username>
          <S.UserHandle>@felipeneto</S.UserHandle>
        </div>
      </S.Profile>
      <button>Seguir</button>
    </S.Wrapper>
  );
};

export default ProfileSnippet;
