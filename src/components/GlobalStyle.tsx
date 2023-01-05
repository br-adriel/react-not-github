import { createGlobalStyle } from 'styled-components';
import { Theme } from '../global/types';

export const darkTheme: Theme = {
  bg: '#15202B',
  text: '#ffffff',
  bgHover: '#25303B',
  accent: '#1D9BF0',
  textAlt: '#8B98A5',
  retweet: '#00BA7C',
  like: '#F91880',
  accentHover: 'rgba(29, 155, 240, 0.2)',
  likeHover: 'rgba(249, 24, 128, 0.2)',
  retweetHover: 'rgba(0, 186, 124, 0.2)',
};

export const darkerTheme: Theme = {
  accentHover: 'rgba(29, 155, 240, 0.2)',
  likeHover: 'rgba(249, 24, 128, 0.2)',
  retweetHover: 'rgba(0, 186, 124, 0.2)',
  bg: '#000000',
  text: '#ffffff',
  textAlt: '#71767B',
  bgHover: '#101010',
  accent: '#1D9BF0',
  retweet: '#00BA7C',
  like: '#F91880',
};

export const lightTheme: Theme = {
  accentHover: 'rgba(29, 155, 240, 0.2)',
  likeHover: 'rgba(249, 24, 128, 0.2)',
  retweetHover: 'rgba(0, 186, 124, 0.2)',
  textAlt: '#536471',
  bg: '#ffffff',
  text: '#000000',
  bgHover: '#efefef',
  accent: '#1D9BF0',
  retweet: '#00BA7C',
  like: '#F91880',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }: { theme: Theme }) => theme.bg};
    color: ${({ theme }: { theme: Theme }) => theme.text};
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
