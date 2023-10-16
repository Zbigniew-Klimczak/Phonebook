import { useSelector, useDispatch } from 'react-redux';

import Notiflix from 'notiflix';
import { contactFilter } from 'utils/ContactFormFunc';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

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
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Form.Group className="text-center">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              autoComplete="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter number"
              name="number"
              autoComplete="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Form.Group>

          <Button type="submit">Add contact</Button>
        </Stack>
      </Form>
    </>
  );
};

export default ContactForm;
