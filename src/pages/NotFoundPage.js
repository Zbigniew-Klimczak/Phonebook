import { Link } from 'react-router-dom';
export const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not Found!</h1>
      <Link to="/">Return to the HomePage</Link>
    </div>
  );
};
