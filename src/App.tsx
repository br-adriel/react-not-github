import GlobalStyle from './components/GlobalStyle';
import { Provider } from './contexts/ThemeContext';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      Hello world
    </Provider>
  );
}

export default App;
