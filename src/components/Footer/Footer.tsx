import * as S from './style';

export const Footer = () => {
  return (
    <S.FooterTag>
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
