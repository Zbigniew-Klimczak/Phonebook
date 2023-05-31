import Contact from '../Contact/Contact';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts } from 'redux/selectors';
import { filteredContacts } from 'utils/ContactListFunc';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsItems } from 'redux/operations';
const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContactsItems());
  // }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {filteredContacts(contacts, filter).map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.phone}
          contact={contact}
        ></Contact>
      ))}
    </ul>
  );
};
export default ContactList;
