import { Link, Typography } from '@mui/material';

export const ImageCredit = () => {
  return (
    <Typography align="center" variant="body2" color="text.secondary">
      image credit:{' '}
      <Link
        sx={{ textDecoration: 'none', color: '#c0c0c0' }}
        href="https://www.instagram.com/aritrachatterjee_">
        @aritrachatterjee_
      </Link>
    </Typography>
  );
};
