import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 2,
      }}
    >
      <Stack spacing={1}>
        {' '}
        <Typography variant="h6" component="h2" gutterBottom={false}>
          {' '}
          Find contacts by name or number
        </Typography>
        <TextField
          type="text"
          label="Search"
          variant="outlined"
          fullWidth
          value={filterName}
          onChange={handleChange}
        />
      </Stack>{' '}
    </Box>
  );
};

export default SearchBox;
