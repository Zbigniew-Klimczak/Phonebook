import css from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.navContainer}>
      <h1>
        <Link to="/">Phonebook</Link>
      </h1>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navigation;
