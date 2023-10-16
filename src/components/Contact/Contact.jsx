import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListGroup.Item key={id}>
        <Stack gap={3} direction="horizontal">
          <p className="p-0 mb-0">{name}</p>
          <p className="p-0  mb-0 ms-auto">{number}</p>
          <Button
            className="p-2"
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Stack>
      </ListGroup.Item>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
