import GlobalStyle from './components/GlobalStyle';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';
import { Provider } from './contexts/ThemeContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider>
      <AuthGoogleProvider>
        <GlobalStyle />
        <AppRouter />
      </AuthGoogleProvider>
    </Provider>
  );
}

export default App;
