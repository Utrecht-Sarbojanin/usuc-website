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
