import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
        p: 1,
      }}
    >
      <Stack spacing={0.5} alignItems="flex-start">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PersonOutlinedIcon
            sx={theme => ({
              fontSize: 20,
              color: theme.palette.primary.contrastText,
            })}
          />

          <Typography
            variant="body1"
            component="p"
            sx={theme => ({
              color: theme.palette.primary.contrastText,
            })}
          >
            {name}
          </Typography>
        </Box>{' '}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartphoneOutlinedIcon
            sx={theme => ({
              fontSize: 20,
              color: theme.palette.primary.contrastText,
            })}
          />

          <Typography
            variant="body1"
            component="p"
            sx={theme => ({
              color: theme.palette.primary.contrastText,
            })}
          >
            {number}
          </Typography>
        </Box>{' '}
      </Stack>{' '}
      <IconButton
        aria-label="delete"
        onClick={handleDelete}
        size="small"
        sx={theme => ({
          color: theme.palette.primary.contrastText,
        })}
      >
        <DeleteOutlinedIcon fontSize="medium" color="secondary" />
      </IconButton>
    </Box>
  );
};

export default Contact;
