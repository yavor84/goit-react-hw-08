import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { selectError, selectLoading } from '../../redux/auth/selectors';

function RegistrationPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: 6,
        textAlign: 'center',
        p: 3,
        flexGrow: 1,
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
        {' '}
        <PersonAddOutlinedIcon
          sx={{
            fontSize: 100,
            color: 'secondary.main',
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom={false}>
          Sign Up
        </Typography>
      </Stack>{' '}
      <RegistrationForm />
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {' '}
          <CircularProgress color="primary" size={40} />
        </Box>
      )}
      {isError && (
        <Typography color="error" sx={{ mt: 2 }}>
          Registration failed. Please try again.
        </Typography>
      )}
    </Box>
  );
}

export default RegistrationPage;
