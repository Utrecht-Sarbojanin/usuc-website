import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { PageContainer, theme } from '../PageContainer';
import { Logo } from '../Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Contact = () => {
  return (
    <PageContainer title={'Contact Us'}>
      <Grid item xs={12} lg={7}>
        <Grid item xs={12}>
          <Card
            sx={{
              background: theme.palette.background.default,
              boxShadow: 'none',
              [theme.breakpoints.up('lg')]: {
                marginRight: '50px'
              }
            }}>
            <CardMedia>
              <img
                src={require('../../static/utrecht_tower.png')}
                alt="featured"
              />
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: 'Assistant'
            }}
            variant="h4"
            align="left"
            component="h4">
            Stichting Utrecht Sarbojanin Utsav Committee (USUC)
          </Typography>
        </Grid>
        <Grid
          sx={{
            [theme.breakpoints.up('lg')]: {
              paddingRight: '30%'
            }
          }}
          item
          xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '18px'
            }}
            variant="body1"
            align="left"
            component="p">
            KvK nummer. 88402096
            <br />
            Utrecht, The Netherlands
            <br />
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="left" component="h4">
            info@utrechtsarbojanin.nl
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: 'left' }} item xs={12}>
          <br />
          <InstagramIcon sx={{ marginRight: '15px' }} fontSize="large" />
          <TwitterIcon sx={{ marginRight: '15px' }} fontSize="large" />
          <FacebookIcon sx={{ marginRight: '15px' }} fontSize="large" />
          {/* <EmailIcon sx={{ margin: '15px' }} fontSize="large" /> */}
        </Grid>
      </Grid>
    </PageContainer>
  );
};
