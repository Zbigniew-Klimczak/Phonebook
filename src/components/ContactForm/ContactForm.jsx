import { useSelector, useDispatch } from 'react-redux';

import Notiflix from 'notiflix';
import { contactFilter } from 'utils/ContactFormFunc';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = evt => {
    const name = evt.target[0].value;
    const number = evt.target[1].value;
    const form = evt.target;
    evt.preventDefault();
    if (contactFilter(contacts, name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: name.trim(),
          number: number.trim(),
        })
      );
    }
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            autoComplete="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            autoComplete="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
