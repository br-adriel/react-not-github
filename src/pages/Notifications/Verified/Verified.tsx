import * as S from './styled';

const Verified = () => {
  return (
    <S.Wrapper>
      <div>
        <img
          src='https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png'
          alt=''
        />
        <div>
          <h2>
            Nada para ver aqui.<br></br>Ainda.
          </h2>
          <p>
            Curtidas, menções, Retweets e muito mais — quando se trata de uma
            conta verificada, você encontra aqui.{' '}
            <a
              href='https://help.twitter.com/managing-your-account/about-twitter-verified-accounts'
              target='_blank'
              rel='noopener noreferrer'
            >
              Saiba mais
            </a>
          </p>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default Verified;
