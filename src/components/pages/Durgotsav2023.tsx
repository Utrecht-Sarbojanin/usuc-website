import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link
} from '@mui/material';
import { PageContainer, theme } from '../PageContainer';
import { ImageCredit } from '../ImageCredit';

export const Durgotsav2023 = () => {
  return (
    <PageContainer title={'Durgotsav 2023'}>
      <Grid item xs={12} lg={7}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          To build a better society, mutual respect and cultural harmony are
          very important and therefore USUC organizes various events throughout
          the year to showcase its cultural heritage and to promote cultural
          exchange between different communities.
          <br />
          <br /> USUC is a non-profit organization run by donations, and also
          looks for opportunities to support charitable causes. One of the
          biggest events in 2023 organized by USUC was the Utrecht Sarbojanin
          Durgotsav between 20 - 24 October (5 days).
          <br />
          <br />
          Durga Puja also celebrated as Navratri or Dussehra festival is an
          annual Hindu festival originating in the Indian subcontinent which
          reveres and pays homage to the Hindu goddess Durga and is also
          celebrated because of the victory of goddess Durga in her battle
          against the shape-shifting Asura, Mahishasura.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Card
          sx={{
            background: theme.palette.background.default,
            boxShadow: 'none',
            [theme.breakpoints.up('lg')]: {
              marginLeft: '30px'
            },
            [theme.breakpoints.down('lg')]: {
              marginTop: '10px'
            }
          }}>
          <CardMedia>
            <img
              src={require('../../static/maa_durga_bw.jpg')}
              alt="featured"
            />
          </CardMedia>
          <CardContent>
            <ImageCredit />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          The victory of good over evil, though it is also in part a harvest
          festival celebrating the goddess as the motherly power behind all of
          life and creation.
          <br />
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          Durga Puja was declared an Intangible Cultural Heritage of Humanity by
          UNESCO, in 2021. "Durga Puja is a religious festival that has become a
          cultural and secular event. It has also become a space for social and
          artistic activities."
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          Utrecht Sarbojanin Durgotsav 20 - 24 October 2023 was a 5-day long
          festival and we aimed to deliver a spectacular event and one of the
          biggest Indian International Festivals in the Netherlands. This was an
          excellent opportunity for people to experience the rich multicultural
          heritage of India and also to engage in cultural exchanges with people
          from different communities.
          <br />
          <br /> The event took place in a beautifully articulated venue with
          one of the biggest Durga Idols in mainland Europe. The event was full
          of various cultural activities from different communities. <br />
          <br />
        </Typography>
      </Grid>
    </PageContainer>
  );
};
