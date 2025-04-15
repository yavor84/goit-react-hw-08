import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <div className={css.error}>Action failed. Check your internet connection and try again!</div>
  );
}

export default ErrorMessage;
