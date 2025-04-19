import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        component={NavLink}
        to="/"
        variant="contained"
        sx={theme => ({
          my: 2,
          display: 'block',
          textTransform: 'capitalize',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.accent.contrastText,
          '&.active': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },
        })}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          variant="contained"
          sx={theme => ({
            my: 2,
            display: 'block',
            textTransform: 'capitalize',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.accent.contrastText,
            '&.active': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            },
          })}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
}

export default Navigation;
