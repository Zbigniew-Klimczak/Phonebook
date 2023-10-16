import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Nav from 'react-bootstrap/Nav';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className=" fw-bold">Phonebook</Navbar.Brand>
        </LinkContainer>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Nav>
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
export default Navigation;
