import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
import { AppBar, Toolbar, Link, Grid } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link
          variant="h4"
          underline="none"
          color="#fff"
          component={RouterLink}
          to="/"
        >
          Phonebook
        </Link>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <Link
              variant="h6"
              underline="none"
              color="#fff"
              component={RouterLink}
              to="/login"
            >
              Log In
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              component={RouterLink}
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
