import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function AuthNav() {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        sx={theme => ({
          my: 2,
          display: 'block',
          textTransform: 'capitalize',

          '&.active': {
            backgroundColor: theme.palette.secondary.main,

            color: 'white',
          },
        })}
      >
        Sign Up
      </Button>

      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        sx={theme => ({
          my: 2,
          display: 'block',
          textTransform: 'capitalize',

          '&.active': {
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
          },
        })}
      >
        Log In
      </Button>
    </Box>
  );
}

export default AuthNav;
