import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import { selectError } from 'redux/selectors';
import { fetchContactsItems } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  if (error !== null) {
    console.log(error);
  }
  useEffect(() => {
    dispatch(fetchContactsItems());
  }, [dispatch]);
  return (
    <>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};
