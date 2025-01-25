import { Grid2, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

export const LocationInformation = ({ userData }) => {
  const { location, twitter_username, blog, company } = userData;

  return (
    <Grid2 container spacing={2} sx={{ marginTop: '16px' }}>
      <Grid2 size={{ xs: 6 }}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location || 'Not available'}</Typography>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 6 }}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitter_username ? `@${twitter_username}` : 'Not available'}
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 6 }}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          <Typography>
            {blog && typeof blog === 'string' ? (
              <a
                target="_blank"
                href={blog.startsWith('http') ? blog : `https://${blog}`}
                rel="noreferrer noopener"
              >
                {blog}
              </a>
            ) : (
              'Not available'
            )}
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 6 }}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{company || 'Not available'}</Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};
