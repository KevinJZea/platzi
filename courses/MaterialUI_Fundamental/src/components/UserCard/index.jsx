import { CardMedia, Grid2, Stack } from '@mui/material';
import { MainInfo } from '../containers/MainInfo';
import { Description } from '../containers/Description';

export const UserCard = (props) => {
  const { userData } = props;
  return (
    <Grid2 container sx={{ marginTop: '15px' }}>
      <Grid2 size={{ xs: 3 }}>
        <CardMedia
          alt="GitHub User"
          component="img"
          image={userData.avatar_url}
          sx={{ borderRadius: '50%', marginLeft: '5px' }}
        />
      </Grid2>
      <Grid2 size={{ xs: 9 }}>
        <Stack direction="column" spacing={1} sx={{ margin: '30px' }}>
          <MainInfo userData={userData} />
          <Description userData={userData} />
        </Stack>
      </Grid2>
    </Grid2>
  );
};
