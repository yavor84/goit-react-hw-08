import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      <Stack spacing={3} alignItems="center" maxWidth="sm">
        <MobileScreenShareOutlinedIcon
          sx={{
            fontSize: 150,
            color: 'secondary.main',
          }}
        />

        <Typography variant="h3" component="h1" gutterBottom>
          ContactBook App
        </Typography>

        <Typography variant="h5" component="p" color="text.secondary">
          Your personal contact manager. Store and manage your phone contacts easily and quickly.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3 }} sx={{ mt: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <AddCircleOutlineOutlinedIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Add & Store
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Save all your contacts in one secure place.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <SearchOutlinedIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Find Quickly
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Easily search through your saved contacts.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <SortOutlinedIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Organize
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Keep your contacts tidy and categorized.
            </Typography>
          </Box>
        </Stack>

        {!isLoggedIn && (
          <Box sx={{ mt: 6 }}>
            <Button
              component={NavLink}
              to="/login"
              variant="contained"
              color="primary"
              size="large"
            >
              Log In
            </Button>
            <Button
              component={NavLink}
              to="/register"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ ml: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

export default HomePage;
