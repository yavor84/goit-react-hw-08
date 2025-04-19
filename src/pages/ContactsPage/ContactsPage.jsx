import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { selectUser } from '../../redux/auth/selectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <Stack spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <PeopleOutlinedIcon
          sx={{
            fontSize: 120,
            color: 'secondary.main',
          }}
        />

        <Typography variant="h4" component="h1" gutterBottom={false}>
          {' '}
          Your contacts,{' '}
          <Box
            component="span"
            sx={theme => ({
              color: theme.palette.secondary.main,
            })}
          >
            {user.name}
          </Box>
        </Typography>
      </Stack>{' '}
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 500 }}>
        <ContactForm />

        <SearchBox />

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {' '}
            <CircularProgress color="primary" size={40} />
          </Box>
        )}
        {isError && (
          <Typography color="error">
            Action failed. Check your internet connection and try again
          </Typography>
        )}

        {!isLoading && !isError && contacts.length > 0 && <ContactList />}
        {!isLoading && !isError && contacts.length === 0 && (
          <Typography color="error" sx={{ mt: 2 }}>
            No contacts yet. Add your first contact!
          </Typography>
        )}
      </Stack>{' '}
    </Box>
  );
}

export default ContactsPage;
