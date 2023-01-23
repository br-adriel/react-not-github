import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import LoginBanner from './components/LoginBanner';
import { Provider } from './contexts/ThemeContext';
import AppRouter from './routes/AppRouter';
import { login } from './store/authSlice';
import './lib/dayjs';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = sessionStorage.getItem('@AuthFirebase:user');
    const user = userString ? JSON.parse(userString) : null;

    if (user) {
      dispatch(login({ user }));
    }
  }, []);

  return (
    <Provider>
      <GlobalStyle />
      <AppRouter />
      <LoginBanner />
    </Provider>
  );
}

export default App;
