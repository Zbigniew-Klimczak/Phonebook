import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import Stack from 'react-bootstrap/Stack';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Stack direction="horizontal" gap={3}>
      <Nav className="flex-column">
        <LinkContainer to="/contacts">
          <Nav.Link className="p-0 text-center">Contacts</Nav.Link>
        </LinkContainer>
        <p className="mb-0 text-muted">{useAuth().user.email}</p>
      </Nav>

      <Button
        variant="secondary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Stack>
  );
};
export default UserMenu;
