import { Container, Grid, Theme, Typography, createTheme } from '@mui/material';
import { themeOptions } from '../Theme';

export const theme: Theme = createTheme(themeOptions);

export const PageContainer = (props: any) => {
  return (
    <Container
      sx={{
        [theme.breakpoints.down('lg')]: {
          marginTop: '20px'
        },
        [theme.breakpoints.up('lg')]: {
          marginTop: '35px'
        }
      }}
      maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: '1.5em',
                marginTop: '20px',
                letterSpacing: '1.9px',
                marginBottom: '20px'
              }}
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom>
              {props.title}
            </Typography>
          </Grid>
          <Grid sx={{ minHeight: '70vh' }} container direction="row" xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
