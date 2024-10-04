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

const eventsSchedule: USUCEvent[] = [
  {
    name: 'Maha Shashthi',
    date: 'October 9,2024',
    activities: [
      '08:44 Bilva Nimantran & Sankalpa',
      '10:00 Kalparambha, Akal Bodhon',
      '14:00 Amantran and Adhibas',
      '17:30 Sandha Arati',
      '18:30 Cultural events start',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/820489/31695707'
  },
  {
    name: 'Maha Saptami',
    date: 'October 10,2024',
    activities: [
      '08:30 Maha Saptami Puja start',
      '09:00 Kalabau snan',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '17:30 Sondha Arati',
      '18:30 Cultural events start',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/820493/31695711'
  },
  {
    name: 'Maha Ashtami',
    date: 'October 11,2024',
    activities: [
      '08:30 Maha Ashtami Puja',
      '10:30 Pushpanjali',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '16:00 Maha Ashtami Sandhi Puja',
      '17:30 Sandhi Puja Anjali',
      '18:00 Sondha Arati',
      '18:30 Cultural events start',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/820499/31695717'
  },
  {
    name: 'Maha Nabami',
    date: 'October 12,2024',
    activities: [
      '09:00 Maha Nabami Puja',
      '12:00 Pushpanjali',
      '13:00 Maha Nabami Hom/Yajna',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '15:00 Homa, Havan',
      '17:30 Sandha Arati',
      '18:30 Cultural events start',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/820503/31695725'
  },
  {
    name: 'Bijoya Dashami',
    date: 'October 13,2024',
    activities: [
      '08:00 Dashami Puja',
      '10:00 Bisharjan & Dadhikarma',
      '11:00 DebiBodhon & Sindoor Khela',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '16:00 Devir gaman',
      '17:00 Cultural events start',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/820505/31695727'
  }
];

export const Event = () => {
  return (
    <PageContainer title="Durga Puja 2024 Schedule">
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
  const time = item.substring(0, 5);
  const description = item.substring(5);

  return (
    <ListItem>
      <Grid item xs={12}>
        {time} &nbsp; &nbsp;{description}
      </Grid>
    </ListItem>
  );
};
