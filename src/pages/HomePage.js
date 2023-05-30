import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
export const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
