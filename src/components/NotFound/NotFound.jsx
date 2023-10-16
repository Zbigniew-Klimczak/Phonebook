import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
const NotFound = () => {
  return (
    <Container className="my-5">
      <Stack gap={4}>
        <h1 className="fw-bold text-center">I'm sorry. Page not Found...</h1>
        <Nav>
          <LinkContainer className="mx-auto" to="/">
            <Nav.Link>
              <p className="fw-bold ">Return to the Homepage</p>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Stack>
    </Container>
  );
};
export default NotFound;
