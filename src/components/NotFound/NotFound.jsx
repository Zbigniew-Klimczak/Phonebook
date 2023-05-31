import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>I'm sorry. Page not Found...</h1>
      <Link className={css.link} to="/">
        Return to the Homepage
      </Link>
    </div>
  );
};
export default NotFound;
