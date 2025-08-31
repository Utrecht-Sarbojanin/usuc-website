import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button
} from '@mui/material';
import { PageContainer, theme } from '../PageContainer';
import { ImageCredit } from '../ImageCredit';

export const Durgotsav = () => {
  return (
    <PageContainer title={'Durgotsav 2025'}>
      <Grid item xs={12} lg={7}>
        <Typography variant="h6" align="left">
          Building Cultural Bridges Through Celebration
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          At USUC, we believe that mutual respect and cultural harmony are
          essential for creating a better society. Throughout the year, we
          organize a variety of events to showcase our cultural heritage and
          promote meaningful exchanges between diverse communities.
          <br />
          <br /> As a non-profit organization funded through donations, USUC
          also actively seeks opportunities to support charitable causes. In
          2025, one of our most anticipated events will be the Utrecht
          Sarbojanin Durgotsav, taking place from{' '}
          <i>September 27 to October 1, 2025</i> over five vibrant days.
          <br />
          <Typography
            sx={{
              fontSize: '18px'
            }}
            variant="body1"
            align="center"
            color={'secondary'}
            component="p">
            <Button
              sx={{
                marginTop: '20px'
              }}
              variant="contained"
              href="/#/register">
              Regiter for Durgotsav 2025
            </Button>
            <br />
          </Typography>
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
          Durga Puja is an annual Hindu festival originating in the Indian
          subcontinent. It honors the goddess Durga and commemorates her victory
          over the shape-shifting demon Mahishasura, symbolizing the triumph of
          good over evil. Beyond its spiritual significance, it is also
          celebrated as a harvest festival, honoring the goddess as the
          nurturing force behind all life and creation.
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          In 2021, UNESCO recognized Durga Puja as an Intangible Cultural
          Heritage of Humanity, describing it as a religious festival that has
          evolved into a cultural and secular event, as well as a platform for
          vibrant social and artistic activities.
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
          Our five-day festival will be one of the largest Indian international
          celebrations in the Netherlands. Visitors will have the chance to
          experience the rich multicultural heritage of India and engage in
          cultural exchanges with people from across the globe.
          <br />
          <br /> The event will be hosted in a beautifully designed venue,
          featuring one of the largest Durga idols in mainland Europe. Guests
          can look forward to a diverse program of cultural performances, art,
          music, and community activities — making this an unforgettable
          celebration for all. <br />
          <br />
          <br />
          We are cordially inviting everyone to join us and celebrate this great
          Indian International Festival - Utrecht Sarbojanin Durgotsav 2025.
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
          ZIMIHC Theater Stefanus - Braziliëdreef 2, 3563 CK Utrecht,
          Netherlands
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
          <b>Date:</b> <br />
          September 27 to October 1, 2025
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
          <Button
            sx={{
              marginTop: '20px'
            }}
            variant="contained"
            href="/#/donate">
            Be a patron of the event
          </Button>
        </Typography>
      </Grid>
    </PageContainer>
  );
};
