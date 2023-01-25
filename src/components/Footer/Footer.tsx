import * as S from './style';

export const Footer = () => {
  return (
    <S.FooterTag>
      <p>
        Essa página não tem qualquer relação com o twitter, e foi construída
        para parecer com o site oficial com a finalidade de praticar as
        habilidades de desenvolvimento frontend do desenvolvedor
      </p>
      <div>
        <a
          href='https://github.com/br-adriel'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <a
          href='https://www.linkedin.com/in/adriel-fsantos/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
        <a
          href='https://br-adriel.github.io/site/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Site
        </a>
      </div>
      <p>{new Date().getFullYear()} Adriel Santos</p>
    </S.FooterTag>
  );
};

export default Footer;
