import css from './Welcome.module.css';
const Welcome = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome to Phonebook!</h2>
      <p className={css.paragraph}>App where you can:</p>
      <ul className={css.list}>
        <li>Have your own list of contacts</li>
        <li>Add and delete your contacts</li>
        <li>Search by name contacts that you need</li>
      </ul>
    </div>
  );
};
export default Welcome;
