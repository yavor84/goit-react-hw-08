import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectError, selectLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Incorrect email or password. Please try again</ErrorMessage>}
    </div>
  );
}

export default LoginPage;
