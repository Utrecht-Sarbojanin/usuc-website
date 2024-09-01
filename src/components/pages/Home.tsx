import {
  Badge,
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
  const isNoticeEnabled = false;
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
      {isNoticeEnabled ? <Notice /> : ''}
    </>
  );
};

const Notice = () => {
  return (
    <Container maxWidth="lg">
      <Grid sx={{ marginTop: '30px', marginBottom: '30px' }} item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          **Free registration for Devi Darshan & Pushpanjali is open now. Passes
          are limited. Hurry Up!
        </Typography>
      </Grid>
    </Container>
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
            mt: '20px'
          }}>
          <CardMedia>
            <img src={require('../../static/cover_home.jpg')} alt="featured" />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};

const RightColumn = () => {
  const isTwitterBtnEnabled = false;
  const isEmailBtnEnabled = false;

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
      <Grid sx={{ marginBottom: '50px' }} item xs={12}>
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
      <Grid sx={{ textAlign: 'center', marginTop: '60px' }} item xs={12}>
        Follow us on social media
      </Grid>
      <Grid sx={{ textAlign: 'center' }} item xs={12}>
        <Typography display={'inline'}>
          <Link
            href="https://www.instagram.com/utrechtsarbojanin"
            target="_blank"
            underline="none">
            <InstagramIcon sx={{ margin: '10px' }} fontSize="large" />
          </Link>
        </Typography>

        {isTwitterBtnEnabled?(<Typography display={'inline'}>
          <Link
            href="https://twitter.com/suc_utrecht"
            target="_blank"
            underline="none">
            <TwitterIcon sx={{ margin: '10px' }} fontSize="large" />
          </Link>
        </Typography>):''}

        <Typography display={'inline'}>
          <Link
            href="https://www.facebook.com/profile.php?id=100087395963544"
            target="_blank"
            underline="none">
            <FacebookIcon sx={{ margin: '10px' }} fontSize="large" />
          </Link>
        </Typography>

        {isEmailBtnEnabled?(<Typography display={'inline'}>
          <Link
            href="mailto:info@utrechtsarbojanin.nl"
            target="_blank"
            underline="none">
            <EmailIcon sx={{ margin: '10px' }} fontSize="large" />
          </Link>
        </Typography>):''}
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
            navigateTo('durgotsav2024');
          }}>
          Durgotsav 2024
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button
          fullWidth
          variant="contained"
          href="https://drive.google.com/file/d/1fBualbBINzNRbNKLzhtSXuShvAwPi7Cc/view?usp=drivesdk"
          target="_blank">
          Brochure
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
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigateTo('donate');
          }}>
          Donate
        </Button>
      </Grid>
      <Grid sx={{ padding: '10px' }} item xs={6}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigateTo('gallery');
          }}>
          Gallery
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
  const isMomentsEnabled = true;
  const isDurgotsavEnabled = true;
  return (
    <Container sx={{ paddingTop: '40px' }} maxWidth="lg" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        <InfoCard
          title={'Our Sarbojanin Heritage'}
          buttons={[
            { text: 'Read More', target: 'sarbojanin', type: 'outlined' }
          ]}>
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
        {/*<InfoCard
          title={'Upcoming Event'}
          specialTitle={true}
          buttons={[
            {
              text: 'Registration Closed',
              target: 'register',
              type: 'outlined',
              disabled: true
            }
          ]}>
          <Line>{'Poila Boishakh (Bengali New Year)'}</Line>
          <Line>{'Celebration 2024'}</Line>
          <Line>{'14 April 2024'}</Line>
        </InfoCard>*/}
        {isDurgotsavEnabled ? (
          <InfoCard
            title={'USUC Durgotsav 2024'}
            specialTitle={true}
            buttons={[
              { text: 'Register', target: 'register', type: 'outlined' }
            ]}>
            <Line>{'Durga Puja 2024'}</Line>
            <Line>{'9 - 13 October 2024'}</Line>
          </InfoCard>
        ) : (
          ''
        )}
        {isMomentsEnabled ? (
          <InfoCard
            title={'Moments'}
            buttons={[
              {
                text: 'View Gallery',
                target: 'gallery',
                type: 'outlined'
              }
            ]}>
            <Line>{'Sights & Sounds of Utrecht Sarbojanin'}</Line>
          </InfoCard>
        ) : (
          ''
        )}
      </Grid>
    </Container>
  );
};

const InfoCard = (props: any) => {
  const titleColor =
    props.specialTitle === true
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  const badgeStyle = {
    '& .MuiBadge-badge': {
      fontSize: '14px',
      fontWeight: 'bold'
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader
          sx={{ textAlign: 'center', color: `${titleColor}` }}
          title={
            props.specialNote ? (
              <Badge sx={badgeStyle} color="secondary" badgeContent={'new'}>
                {props.title}
              </Badge>
            ) : (
              props.title
            )
          }
        />
        <CardContent sx={{ height: '100px' }}>{props.children}</CardContent>
        <CardActions>
          <Buttons buttons={props.buttons} />
        </CardActions>
      </Card>
    </Grid>
  );
};

const Buttons = (props: any) => {
  interface ButtonProps {
    target: string;
    text: string;
    type: string;
    disabled?: boolean;
  }

  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate('/' + path);
  };

  return props.buttons.map((element: ButtonProps) => {
    const color =
      element.type === 'outlined'
        ? 'inherit'
        : element.type === 'primary'
        ? 'primary'
        : 'secondary';

    const showButton = element.disabled ?? false;

    return (
      <>
        {!showButton ? (
          <Button
            fullWidth
            variant={element.type === 'outlined' ? 'outlined' : 'contained'}
            color={color}
            onClick={() => {
              navigateTo(element.target);
            }}>
            {element.text}
          </Button>
        ) : (
          <Button disabled fullWidth variant={'contained'}>
            {element.text}
          </Button>
        )}
      </>
    );
  });
};

const Line = (props: any) => {
  return (
    <Typography component="p" variant="subtitle1" align="center">
      {props.children}
    </Typography>
  );
};
