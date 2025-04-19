import AppBar from '../AppBar/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      <Container component="main" maxWidth="lg" sx={{ mt: 2, mb: 2, flexGrow: 1 }}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
