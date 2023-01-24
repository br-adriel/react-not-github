import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../components/GlobalStyle';
import { selectAuth } from '../store/authSlice';

type contextType = {
  setCurrentTheme: Function;
};

const ThemeContext = createContext<contextType>({ setCurrentTheme: () => {} });

const Provider: React.FC<{ children?: any }> = ({ children }) => {
  const { user } = useSelector(selectAuth);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    setCurrentTheme(user ? user.theme : lightTheme);
  }, [user]);

  return (
    <ThemeContext.Provider value={{ setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Provider };
