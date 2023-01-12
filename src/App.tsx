import GlobalStyle from './components/GlobalStyle';
import LoginBanner from './components/LoginBanner';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';
import { Provider } from './contexts/ThemeContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider>
      <AuthGoogleProvider>
        <GlobalStyle />
        <AppRouter />
        <LoginBanner />
      </AuthGoogleProvider>
    </Provider>
  );
}

export default App;
