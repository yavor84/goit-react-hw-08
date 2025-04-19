import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { AppBar, Box, Toolbar, Container } from '@mui/material';

function AppHeader() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" color="primary">
      <Toolbar disableGutters>
        <Container component="main" maxWidth="lg" sx={{ mt: 2, mb: 2, flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
            <Navigation />
            <Box sx={{ flexGrow: 1 }} />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
