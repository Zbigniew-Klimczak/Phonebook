import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Form.Group className="text-center">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            autoComplete="name"
            required
          />
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            autoComplete="email"
            required
          />
        </Form.Group>

        <Form.Group className="text-center">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            autoComplete="off"
            required
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Stack>
    </Form>
  );
};
export default Register;
