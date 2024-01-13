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
import { PageContainer } from '../PageContainer';
import { useState } from 'react';
import { MenuDialog } from '../MenuDialog';
import { Ticket } from '../../models/Ticket';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Registration = () => {
  const isMenuAvailable = true;
  const isEventScheduleAvailable = false;
  const [menuDialogOpen, setMenuDialogOpen] = useState(false);

  const [ticket, setTicket] = useState<Ticket>({
    type: '',
    title: '',
    date: '',
    menu: { title: '', menuImages: [] },
    link: ''
  });

  const openMenuDialog = (ticket: Ticket) => {
    setMenuDialogOpen(true);
    setTicket(ticket);
  };

  const handleMenuDialogClose = () => {
    setMenuDialogOpen(false);
    setTicket({
      type: '',
      title: '',
      date: '',
      menu: { title: '', menuImages: [] },
      link: ''
    });
  };

  return (
    <PageContainer title="Registration for Saraswati Puja 2024">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>Date:</b> 17 February, 2024
          <br />
          <b>Time:</b> 11 a.m. to 3:30 pm
          <br />
          <b>Venue:</b> Franciscusdreef 4, 3555 SW, Utrecht, Netherlands
          <br />
          <br />
        </Typography>
        {isMenuAvailable ? (
          <Typography
            sx={{
              fontSize: '18px'
            }}
            variant="body1"
            align="center"
            component="p">
            (To view the food menu of each day, click on the 'See Menu' button
            on pass type)
            <br />
            <br />
          </Typography>
        ) : (
          ''
        )}
      </Grid>
      <Tickets openMenuDialog={openMenuDialog} />
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
          {isEventScheduleAvailable ? (
            <b>
              For detailed schedule of Durga Puja 2023 : Click{' '}
              <Link
                sx={{ textDecoration: 'none', color: '#c0c0c0' }}
                href="/#/event-schedule">
                here
              </Link>
            </b>
          ) : (
            ''
          )}
        </Typography>
      </Grid>
      <MenuDialog
        open={menuDialogOpen}
        handleClose={handleMenuDialogClose}
        ticket={ticket}
      />
    </PageContainer>
  );
};

const ticketList: Ticket[] = [
  {
    type: 'full_event',
    title: 'Full Event Pass',
    date: '17 February, 2024',
    menu: {
      title: 'Full Event Menu',
      menuImages: ['saraswati_puja_menu.jpeg']
    },
    link: 'https://usuc.yapsody.com/event/book/798767/31603585'
  }
];

const Tickets = (props: any) => {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {ticketList.map((ticket, index) => {
        return (
          <TicketCard ticket={ticket} openMenuDialog={props.openMenuDialog} />
        );
      })}
    </Grid>
  );
};

const TicketCard = (props: any) => {
  const ticket: Ticket = props.ticket;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader title={ticket.title} sx={{ textAlign: 'center' }} />
        {}
        <CardMedia
          sx={{
            paddingLeft: '10px',
            paddingRight: '10px'
          }}>
          <img
            src={require(`../../static/covers/cov_${ticket.type}.jpg`)}
            alt="featured"
          />
        </CardMedia>
        <CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
            <CalendarMonthIcon sx={{ marginRight: '15px' }} />
            <span>{ticket.date}</span>
          </div>

          {/* <CalendarMonthIcon sx={{ margin: '15px' }} />
          {ticket.date} */}
        </CardContent>
        <CardActions>
          {ticket.menu === undefined || ticket.menu.menuImages.length === 0 ? (
            ''
          ) : (
            <Button
              sx={{ marginLeft: '5px', marginRight: '5px' }}
              fullWidth
              variant={'outlined'}
              color={'inherit'}
              onClick={() => {
                props.openMenuDialog(ticket);
              }}>
              See Menu
            </Button>
          )}
          <Button
            sx={{ marginLeft: '5px', marginRight: '5px' }}
            fullWidth
            variant={'contained'}
            color={'secondary'}
            href={`${ticket.link}`}
            target="_blank">
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
