import { changeFilter } from 'redux/contacts/contacts.reducer';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};
