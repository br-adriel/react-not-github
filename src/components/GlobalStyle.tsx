import { createGlobalStyle } from 'styled-components';
import { Theme } from '../global/types';

export const darkTheme: Theme = {
  bg: '#15202B',
  text: '#ffffff',
  bgHover: '#25303B',
};

export const darkerTheme: Theme = {
  bg: '#000000',
  text: '#ffffff',
  bgHover: '#101010',
};

export const lightTheme: Theme = {
  bg: '#ffffff',
  text: '#000000',
  bgHover: '#efefef',
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
