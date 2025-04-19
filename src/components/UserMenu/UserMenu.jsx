import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        gap: { xs: 1, sm: 2 },
      }}
    >
      <Typography variant="body1" color="inherit">
        {user.name.split(' ')[0]}
      </Typography>

      <Button
        type="button"
        onClick={handleLogOut}
        color="inherit"
        variant="outlined"
        size="small"
        sx={{
          textTransform: 'capitalize',

          display: { xs: 'none', sm: 'flex' },
        }}
      >
        Log Out
      </Button>

      <IconButton
        type="button"
        onClick={handleLogOut}
        color="inherit"
        size="small"
        sx={{
          display: { xs: 'flex', sm: 'none' },

          p: 1,
        }}
      >
        <LogoutOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default UserMenu;
