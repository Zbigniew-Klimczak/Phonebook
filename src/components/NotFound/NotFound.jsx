import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h1 className={css.header}>Page not Found!</h1>
      <Link to="/">Return to the HomePage</Link>
    </div>
  );
};
export default NotFound;
