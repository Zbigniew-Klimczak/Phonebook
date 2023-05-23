import { Link, Outlet } from 'react-router-dom';
export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to phonebook!</h1>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
