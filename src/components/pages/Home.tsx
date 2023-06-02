import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Link,
  Theme,
  Typography,
  createTheme
} from '@mui/material';
import { themeOptions } from '../../Theme';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';

const theme: Theme = createTheme(themeOptions);

export const Home = () => {
  return (
    <>
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
          <LeftColumn />
          <RightColumn />
        </Grid>
      </Container>
      <BottomCards />
    </>
  );
};

const LeftColumn = () => {
  return (
    <Grid item xs={12} lg={8}>
      <Grid item xs={12}>
        <Typography
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '3em'
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '4.5em',
              marginTop: '20px'
            },

            fontWeight: '800',
            letterSpacing: '1.9px',
            marginBottom: '0px'
            // marginTop: '30px'
          }}
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom>
          Utrecht Sarbojanin
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            letterSpacing: '1.5px'
          }}
          variant="body1"
          align="center"
          color="text.secondary"
          component="p">
          A VIBRANT AND DYNAMIC INDIAN BENGALI ASSOCIATION BASED IN THE
          NETHERLANDS
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            background: theme.palette.background.default,
            boxShadow: 'none',
            mt: '40px'
          }}>
          <CardMedia>
            <img src={require('../../static/maa_durga.jpg')} alt="featured" />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};

const RightColumn = () => {
  return (
    <Grid
      sx={{
        [theme.breakpoints.down('lg')]: {
          paddingTop: '10px'
        }
      }}
      item
      xs={12}
      lg={4}>
      <Logo />
      <Grid sx={{ marginBottom: '30px' }} item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          component="p">
          Stichting Utrecht Sarbojanin Utsav Committee promotes and celebrates
          the cultural heritage of Bengal through various cultural and social
          events.
        </Typography>
      </Grid>
      <NavigationButtons />
      <Grid sx={{ textAlign: 'center', marginTop: '50px' }} item xs={12}>
        Follow us on social media
      </Grid>
      <Grid sx={{ textAlign: 'center' }} item xs={12}>
        <InstagramIcon sx={{ margin: '15px' }} fontSize="large" />
        <TwitterIcon sx={{ margin: '15px' }} fontSize="large" />
        <FacebookIcon sx={{ margin: '15px' }} fontSize="large" />
        <EmailIcon sx={{ margin: '15px' }} fontSize="large" />
      </Grid>
    </Grid>
  );
};

const NavigationButtons = () => {
  const navigate = useNavigate();

  const navigateTo = (path: String) => {
    // 👇️ navigate to /contacts
    navigate('/' + path);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigateTo('durgotsav2023');
          }}>
          Durgotsav 2023
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button fullWidth variant="contained">
          Brochure
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button fullWidth variant="contained">
          Registration
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigateTo('contact');
          }}>
          Contact
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button fullWidth variant="contained">
          Donate
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigateTo('about');
          }}>
          About Us
        </Button>
      </Grid>
    </Grid>
  );
};

const BottomCards = () => {
  return (
    <Container sx={{ paddingTop: '40px' }} maxWidth="lg" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        <InfoCard title={'Our Sarbojanin Heritage'} buttonText="Read More">
          <Line>
            <Typography sx={{ display: 'inline-block' }}>
              {'Sarbojanin ['}
              <Link
                sx={{ textDecoration: 'none', color: '#c0c0c0' }}
                href="http://ipa-reader.xyz/?text=%CA%83arbo%C9%9Fonin"
                target="_blank"
                rel="noopener">
                ʃarboɟonin
              </Link>
              {'] →'}&nbsp;
            </Typography>
            <Typography sx={{ fontStyle: 'italic', display: 'inline-block' }}>
              {' for all people'}
            </Typography>
          </Line>
          <Line>{'The all embracing cultural heritage of Bengal'}</Line>
        </InfoCard>
        <InfoCard title={'Upcomimg Event'} buttonText="Read More">
          <Line>{'Durgotsav (Durga Puja) 2023'}</Line>
          <Line>{'October 20 - 24'}</Line>
        </InfoCard>
        <InfoCard title={'Memories'} buttonText="View Gallery">
          <Line>{'Sights and sounds of Utrecht Sarbojanin'}</Line>
        </InfoCard>
      </Grid>
    </Container>
  );
};

const InfoCard = (props: any) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader title={props.title} sx={{ textAlign: 'center' }} />
        <CardContent sx={{ height: '100px' }}>{props.children}</CardContent>
        <CardActions>
          <Button fullWidth variant={'outlined'}>
            {props.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Line = (props: any) => {
  return (
    <Typography component="p" variant="subtitle1" align="center">
      {props.children}
    </Typography>
  );
};
