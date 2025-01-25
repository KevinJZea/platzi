import { Stack, Typography } from '@mui/material';
import { Fragment } from 'react';
import { PaperInformation } from '../../PaperInformation';
import { LocationInformation } from '../../LocationInformation';

export const Description = ({ userData }) => {
  const { bio } = userData;
  return (
    <Fragment>
      <Stack sx={{ justifyContent: 'center' }}>
        <Typography variant="body1">
          {bio ??
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, numquam.'}
        </Typography>
      </Stack>
      <PaperInformation userData={userData} />
      <LocationInformation userData={userData} />
    </Fragment>
  );
};
