import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

export const MainInfo = ({ userData }) => {
  const { name, login, created_at } = userData;

  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">@{login}</Typography>
    </Fragment>
  );
};
