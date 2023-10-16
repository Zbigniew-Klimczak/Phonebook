import Contact from '../Contact/Contact';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { filteredContacts } from 'utils/ContactListFunc';
import { InfinitySpin } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading === true ? (
        <Container className="mt-5 d-flex justify-content-center">
          <InfinitySpin color="#3f89ca" />
        </Container>
      ) : (
        <ListGroup className="mt-5">
          {filteredContacts(contacts, filter).map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              contact={contact}
            ></Contact>
          ))}
        </ListGroup>
      )}
    </>
  );
};
export default ContactList;
