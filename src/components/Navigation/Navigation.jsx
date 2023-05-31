import css from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.navContainer}>
      <h1>
        <Link className={css.title} to="/">
          Phonebook
        </Link>
      </h1>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={css.linkContainer}>
          <Link className={css.link} to="/login">
            Log In
          </Link>

          <Link className={css.link} to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
