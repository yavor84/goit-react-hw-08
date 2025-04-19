import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectError, selectLoading } from '../../redux/auth/selectors';
import { clearError } from '../../redux/auth/slice';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        textAlign: 'center',
        p: 3,
        flexGrow: 1,
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
        {' '}
        <LockOutlinedIcon
          sx={{
            fontSize: 100,
            color: 'secondary.main',
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom={false}>
          {' '}
          Log In
        </Typography>
      </Stack>{' '}
      <LoginForm />
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {' '}
          <CircularProgress color="primary" size={40} />
        </Box>
      )}
      {isError && (
        <Typography color="error" sx={{ mt: 2 }}>
          {' '}
          Incorrect email or password. Please try again
        </Typography>
      )}
    </Box>
  );
}

export default LoginPage;
