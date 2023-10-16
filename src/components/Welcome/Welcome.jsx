import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';

const Welcome = () => {
  return (
    <Stack gap={3}>
      <h1 className="text-center">Welcome to Phonebook!</h1>
      <p className="text-center fw-bold">App where you can:</p>
      <ListGroup variant="flush">
        <ListGroup.Item className="text-center">
          Have your own list of contacts
        </ListGroup.Item>
        <ListGroup.Item className="text-center">
          Add and delete your contacts
        </ListGroup.Item>
        <ListGroup.Item className="text-center">
          Search by name contacts that you need
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};
export default Welcome;
