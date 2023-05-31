import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import css from './Home.module.css';
const Home = () => {
  return (
    <div className={css.home}>
      <Navigation />
      <Outlet />
    </div>
  );
};
export default Home;
