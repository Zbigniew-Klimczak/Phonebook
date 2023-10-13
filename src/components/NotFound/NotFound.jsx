import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h1>I'm sorry. Page not Found...</h1>
      <Link to="/">Return to the Homepage</Link>
    </div>
  );
};
export default NotFound;
