import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../components/GlobalStyle';

type contextType = {
  setCurrentTheme: Function;
};

const ThemeContext = createContext<contextType>({ setCurrentTheme: () => {} });

const Provider: React.FC<{ children?: any }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider value={{ setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Provider };
