import GlobalStyle from './components/GlobalStyle';
import LoginBanner from './components/LoginBanner';
import { Provider } from './contexts/ThemeContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <AppRouter />
      <LoginBanner />
    </Provider>
  );
}

export default App;
