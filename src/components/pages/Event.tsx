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
    date: 'October 20,2023',
    activities: [
      '16:30 Shashthi Puja, Durga Bodhon O Amontron',
      '17:30 Sondha Arati',
      '18:30 Cultural Program at USUC Rangmanch',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/781085/31566433'
  },
  {
    name: 'Maha Saptami',
    date: 'October 21,2023',
    activities: [
      '09:00 Maha Saptami Puja',
      '12:30 Pushpanjali',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '17:30 Sondha Arati',
      '18:30 Cultural Program at USUC Rangmanch',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/781087/31566435'
  },
  {
    name: 'Maha Ashtami',
    date: 'October 22,2023',
    activities: [
      '08:30 Maha Ashtami Puja',
      '11:30 Pushpanjali',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '16:00 Maha Ashtami Sandhi Puja',
      '17:30 Sondha Arati',
      '18:30 Cultural Program at USUC Rangmanch',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/781089/31566437'
  },
  {
    name: 'Maha Nabami',
    date: 'October 23,2023',
    activities: [
      '09:00 Maha Nabami Puja',
      '12:00 Pushpanjali',
      '13:00 Maha Nabami Hom/Yajna',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '18:30 Cultural Program at USUC Rangmanch',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/781091/31566439'
  },
  {
    name: 'Bijoya Dashami',
    date: 'October 24,2023',
    activities: [
      '09:00 Dashami Puja',
      '11:00 DebiBodhon & Sindoor Khela',
      '12:00 Bisharjan',
      '13:00 Lunch',
      '15:00 Fun Activities',
      '17:00 Cultural Program at USUC Rangmanch',
      '19:00 DJ Night',
      '20:30 Dinner Starts'
    ],
    registrationLink: 'https://usuc.yapsody.com/event/book/781093/31566441'
  }
];

export const Event = () => {
  return (
    <PageContainer title="Durga Puja 2023 Schedule">
      <Grid item xs={12}>
        <DaywiseEvents />
      </Grid>
      <Grid item xs={15}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          <br />
          <br />
          <b>
            * For all other event passes go to{' '}
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
            {event.activities.map((item, index) => (
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
