import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
