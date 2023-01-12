import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Notifications, {
  AllNotifications,
  Mentions,
  Verified,
} from '../pages/Notifications';
import Explore from '../pages/Explore';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='explore' element={<Explore />} />
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
