import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {visibleContacts.map(contact => (
        <Card
          key={contact.id}
          variant="outlined"
          sx={theme => ({
            backgroundColor: theme.palette.primary.main,
            transition: theme.transitions.create('box-shadow'),
            '&:hover': {
              boxShadow: theme.shadows[6],
              transform: 'scale(1.01)',
            },
          })}
        >
          <CardContent sx={{ p: 1, '&:last-child': { paddingBottom: 1 } }}>
            <Contact data={contact} />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default ContactList;
