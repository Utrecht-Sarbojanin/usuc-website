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

export const Durgotsav2024 = () => {
  return (
    <PageContainer title={'Durgotsav 2024'}>
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
          biggest events in 2024 that is going to be organized by USUC will be the Utrecht Sarbojanin
          Durgotsav between 9 - 13 October (5 days).
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
          Utrecht Sarbojanin Durgotsav 9 - 13 October 2024 will be a 5-day long
          festival and we aim to deliver a spectacular event and one of the
          biggest Indian International Festivals in the Netherlands. This is an
          excellent opportunity for people to experience the rich multicultural
          heritage of India and also to engage in cultural exchanges with people
          from different communities.
          <br />
          <br /> The event will take place in a beautifully articulated venue with
          one of the biggest Durga Idols in mainland Europe. The event will be full
          of various cultural activities from different communities. <br />
          <br />
          <br />
          We are cordially inviting everyone to join us and celebrate this great
          Indian International Festival - Utrecht Sarbojanin Durgotsav 2024.
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>Venue:</b> <br />
          ZIMIHC Theater Stefanus - Braziliëdreef 2, 3563 CK Utrecht, Netherlands
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>
            For detailed schedule of Durga Puja 2024 : Click{' '}
            <Link
              sx={{ textDecoration: 'none', color: '#87ceeb' }}
              href="/#/event-schedule">
              here
            </Link>
          </b>
          <br/>
          <br/>
        </Typography>
        <Typography
          sx={{
            fontSize: '25px',
            fontStyle: 'italic'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>
            Registration and ticketing are open now : Click{' '}
            <Link
              sx={{ textDecoration: 'none', color: '#87ceeb' }}
              href="/#/register">
              here
            </Link>
          </b>
        </Typography>
      </Grid>
    </PageContainer>
  );
};
