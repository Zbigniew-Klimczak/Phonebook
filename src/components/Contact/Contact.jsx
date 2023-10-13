import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li key={id}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
