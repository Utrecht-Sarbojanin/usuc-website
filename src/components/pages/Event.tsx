import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Link,
  List,
  ListItem,
  Typography
} from '@mui/material';
import { PageContainer, theme } from '../PageContainer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { USUCEvent } from '../../models/USUCEvent';

const eventsSchedule: USUCEvent[] = [{
    name: 'Maha Panchami',
    date: 'September 27, 2025',
    activities: [
      '17:04 CET Billa Nimantran',
      '17:30 CET Sondha Arati',
      '18:00 CET Cultural events',
      '20:00 CET Dinner'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853089/31765559'
  },{
    name: 'Maha Shashthi',
    date: 'September 28, 2025',
    activities: [
      '09:00 CET Kalparambha & Akal Bodhon',
      '13:00 CET Lunch',
      '16:00 CET Amantran and Adhibas',
      '17:30 CET Sondha Arati',
      '18:00 CET Cultural events',
      '20:00 CET Dinner'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853091/31765561'
  },
  {
    name: 'Maha Saptami',
    date: 'September 29, 2025',
    activities: [
      '09:00 CET Naba Patrika Snan',
      '13:00 CET Lunch',
      '17:30 CET Sondha Arati',
      '18:00 CET Cultural events',
      '20:00 CET Dinner'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853093/31765563'
  },
  {
    name: 'Maha Ashtami',
    date: 'September 30, 2025',
    activities: [
      '08:30 CET Maha Ashtami Puja',
      '11:30 CET Maha Ashtami Pushpanjali',
      '13:00 CET Lunch',
      '14:12 CET Sandhi Puja',
      '17:30 CET Sondha Arati',
      '18:00 CET Cultural events',
      '19:00 CET Dandiya Night',
      '20:00 CET Dinner'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853095/31765565'
  },
  {
    name: 'Maha Nabami',
    date: 'October 1, 2025',
    activities: [
      '08:30 CET Maha Nabami Puja',
      '12:30 CET Maha Nabami Pushpanjali',
      '13:00 CET Lunch',
      '14:00 CET Maha Nabami Hom/Yajna'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853097/31765567'
  },
  {
    name: 'Bijoya Dashami',
    date: 'October 1, 2025',
    activities: [
      '15:30 CET Dashami Puja',
      '18:00 CET Debi Bodhon & Sindoor Khela',
      '19:00 CET Dinner'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/853099/31765569'
  }
];

export const Event = () => {
  return (
    <PageContainer title="Durga Puja 2025 Schedule">
      <Grid item xs={15}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>Venue:</b> ZIMIHC Theater Stefanus - Braziliëdreef 2, 3563 CK Utrecht, Netherlands
          <br />
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DaywiseEvents />
      </Grid>
      <Grid item xs={15}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <br />
          <br />
          <b>
            *For all other event passes go to{' '}
            <Link
              sx={{ textDecoration: 'none', color: '#c0c0c0' }}
              href="/#/register">
              Registration
            </Link>
          </b>
        </Typography>
      </Grid>
    </PageContainer>
  );
};

const DaywiseEvents = (props: any) => {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {eventsSchedule.map((event, index) => {
        return <DaywiseEvent event={event} />;
      })}
    </Grid>
  );
};

const DaywiseEvent = (props: any) => {
  const event: USUCEvent = props.event;
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader title={event.name} sx={{ textAlign: 'center' }} />
        <CardContent
          sx={{
            [theme.breakpoints.up('lg')]: {
              height: '410px'
            }
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
            <CalendarMonthIcon sx={{ marginRight: '15px' }} />
            <span>{event.date}</span>
          </div>

          <List>
            {event.activities?.map((item, index) => (
              <EventItem item={item} />
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button
            sx={{ marginLeft: '5px', marginRight: '5px' }}
            fullWidth
            variant={'contained'}
            color={'secondary'}
            href={`${event.registrationLink}`}
            target="_blank">
            Register Now*
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const EventItem = (props: any) => {
  const item: string = props.item;
  const time = item.substring(0, 9);
  const description = item.substring(9);

  return (
    <ListItem>
      <Grid item xs={12}>
        {time} &nbsp; &nbsp;{description}
      </Grid>
    </ListItem>
  );
};
