import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <h1>
        <Link to="/">Phonebook</Link>
      </h1>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <Link to="/login">Log In</Link>

          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
