import { Grid, Card, CardMedia } from '@mui/material';
import { theme } from './PageContainer';

export const Logo = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}>
      <Grid item xs={8} sm={4} lg={12}>
        <Card
          sx={{
            background: theme.palette.background.default,
            boxShadow: 'none',
            [theme.breakpoints.up('md')]: {
              mb: '35px'
            },
            [theme.breakpoints.down('md')]: {
              mb: '20px'
            },
            padding: '10px'
          }}>
          <CardMedia>
            <img src={require('../static/usuc_logo.png')} alt="logo" />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};
