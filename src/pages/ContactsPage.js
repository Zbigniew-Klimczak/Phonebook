import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContactsItems } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';
import css from '../components/App.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (error !== null) {
    console.log(error);
  }
  useEffect(() => {
    dispatch(fetchContactsItems());
  }, [dispatch]);
  return (
    <main className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter></Filter>
      {isLoading === true ? <MagnifyingGlass /> : <ContactList></ContactList>}
    </main>
  );
};
