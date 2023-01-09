import GlobalStyle from './components/GlobalStyle';
import { Provider } from './contexts/ThemeContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}

export default App;
