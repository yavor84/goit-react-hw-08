import css from './ErrorMessage.module.css';

function ErrorMessage({ children }) {
  return <div className={css.error}>{children}</div>;
}

export default ErrorMessage;
