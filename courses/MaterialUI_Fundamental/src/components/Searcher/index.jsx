import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack direction="row" sx={{ marginTop: '30px', width: '80%' }}>
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        size="small"
        value={valueInput}
        variant="outlined"
        sx={{ width: '90%' }}
        onChange={onSearchValueChange}
      />

      <IconButton onClick={handleSubmit} size="small" sx={{ left: '-45px' }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
