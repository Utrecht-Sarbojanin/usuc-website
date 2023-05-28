import { Container, Typography } from '@mui/material';

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'Copyright © Stichting Utrecht Sarbojanin Utsav Committee, '}
      {new Date().getFullYear()}
      {'. KvK nummer 88402096.'}
    </Typography>
  );
};

export const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 3,
        py: [2, 4]
      }}>
      <Copyright sx={{ mt: 2 }} />
    </Container>
  );
};
