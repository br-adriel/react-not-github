import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkerTheme, lightTheme } from '../components/GlobalStyle';
import { selectAuth } from '../store/authSlice';

type contextType = {
  setCurrentTheme: Function;
};

const ThemeContext = createContext<contextType>({ setCurrentTheme: () => {} });

const Provider: React.FC<{ children?: any }> = ({ children }) => {
  const { user } = useSelector(selectAuth);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const getBrowserTheme = () => {
      const darkBrowser = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (darkBrowser) return darkerTheme;
      else return lightTheme;
    };

    const theme = user ? user.theme : getBrowserTheme();
    setCurrentTheme(theme);

    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor?.setAttribute('content', theme.bg);
  }, [user]);

  return (
    <ThemeContext.Provider value={{ setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Provider };
