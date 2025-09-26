import { PageContainer, theme } from '../PageContainer';
import { DURGOTSAV_2025 } from '../../models/USUCEvent';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Typography
} from '@mui/material';
import { USUCSponsor } from '../../models/Sponsor';

export const Sponsor = () => {
  const eventData = DURGOTSAV_2025;

  return (
    <PageContainer title={`Sponsors for ${eventData.name}`}>
        <Grid item xs={12}>
            <Typography sx={{
              fontSize: '18px'
            }}
            variant="body1"
            align="center"
            component="p">
            We are deeply grateful to our sponsors and stall partners for their generous support in making Durgotsav 2025 a grand success. Their contributions have been instrumental in helping us celebrate our cultural heritage and foster community spirit. We encourage you to explore and support these wonderful businesses that stand with us in our journey.
            <br /><br />
            If you or your organization would like to become a sponsor or stall partner for our future events, please reach out to us at <Link
        sx={{ textDecoration: 'none', color: '#c0c0c0' }}
        href="mailto:info@utrechtsarbojanin.nl">
        info@utrechtsarbojanin.nl .
      </Link> Your support will help us continue to promote cultural harmony and community engagement.
            <br /><br />
            Thank you for being a part of our community and for your continued support!
            <br /><br />
            </Typography>
        </Grid>
      <Sponsors openMenuDialog={() => {}} />
    </PageContainer>
  );
};

const ticketList: USUCSponsor[] = [
  {
    id: 'bedrijf',
    type: 'Sponsor',
    name: 'Bedrijf in Balans',
    addressLine1: 'Princestraat 18, 2225 GB, Katwijk',
    addressLine2: '',
    addressLine3: '',
    website: 'https://bedrijfinbalans.com'
  },
  {
    id: 'madras',
    type: 'Sponsor',
    name: 'Madras Diaries',
    addressLine1: 'Brusselplein 11, 3541 CH, Utrecht',
    addressLine2: '',
    addressLine3: '',
    website: 'https://themadrasdiaries.nl'
  },
  {
    id: 'swiftrinity',
    type: 'Sponsor',
    name: 'Swiftrinity BV',
    addressLine1: 'Mandela Plein 1, 1314 CG, Almere',
    addressLine2: '',
    addressLine3: '',

    website: 'https://www.swiftrinity.com'
  },
  {
    id: 'sunderban',
    type: 'Sponsor',
    name: 'Sunderban Asian Supermarket',
    addressLine1: 'Beeklaan 151, 2562 AD, Den Haag',
    addressLine2: '',
    addressLine3: '',
    website: 'https://sunderban.nl'
  },

  {
    id: 'hypotheek_vitaal',
    type: 'Sponsor',
    name: 'Hypotheek Vitaal',
    addressLine1: 'Parijsboulevard 209, 3541 CS, Utrecht',
    addressLine2: '',
    addressLine3: '',
    website: 'https://www.hypotheekvitaal.nl'
  },
  {
    id: 'panjab',
    type: 'Sponsor',
    name: 'Panjab Supermarket',
    addressLine1: 'Muntplein 10, 3437AN, Nieuwegein',
    addressLine2: '',
    addressLine3: '',
    website: 'https://panjabsupermarket.com'
  },
  {
    id: 'folkyr',
    type: 'Sponsor',
    name: 'FOLKyR Music',
    addressLine1: ' ',
    addressLine2: '',
    addressLine3: '',
    website: ''
  },
  {
    id: 'yuhi',
    type: 'Stall Partner',
    name: 'Just Yuhi Foods',
    addressLine1: ' ',
    addressLine2: '',
    addressLine3: '',
    website: ''
  }
];

export const Sponsors = (props: any) => {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {ticketList.map((ticket, index) => {
        return (
          <SponsorCard ticket={ticket} openMenuDialog={props.openMenuDialog} />
        );
      })}
    </Grid>
  );
};

const SponsorCard = (props: any) => {
  const sponsor: USUCSponsor = props.ticket;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader title={sponsor.name} sx={{ textAlign: 'center' }} />
        {}
        <CardMedia
          sx={{
            [theme.breakpoints.up('md')]: {
              minHeight: '300px'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            border: '1px solid #15110d'
          }}>
          <img
            src={require(`../../static/donors/cov_${sponsor.id}.jpg`)}
            alt="featured"
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </CardMedia>
        <CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              height: '50px'
            }}>
            <p>{sponsor.type}</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '18px'
              //textAlign: 'center'
            }}>
            <span>{sponsor.addressLine1}</span>
          </div>
        </CardContent>
        <CardActions>
          {sponsor.website === undefined || sponsor.website === '' ? (
            ''
          ) : (
            <Button
              sx={{ marginLeft: '5px', marginRight: '5px' }}
              fullWidth
              variant={'contained'}
              color={'secondary'}
              href={`${sponsor.website}`}
              target="_blank">
              web site
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
