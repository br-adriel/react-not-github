import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Notifications, {
  AllNotifications,
  Mentions,
  Verified,
} from '../pages/Notifications';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='notifications' element={<Notifications />}>
          <Route path='' element={<AllNotifications />} />
          <Route path='verified' element={<Verified />} />
          <Route path='mentions' element={<Mentions />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
