import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import { PageContainer } from '../PageContainer';
import { useState } from 'react';
import { MenuDialog } from '../MenuDialog';
import { Ticket } from '../../models/Ticket';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Registration = () => {
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
    <PageContainer title="Registration for Durgotsav 2023">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'secondary'}
          component="p">
          <b>Date:</b> 20-24 October, 2023 <br /> <b>Venue:</b> Steenovenweg 5,
          3532 AE, Utrecht, Netherlands
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          component="p">
          (To view the food menu of each day, click on the 'See Menu' button on
          each pass type)
          <br />
          <br />
        </Typography>
      </Grid>
      <Tickets openMenuDialog={openMenuDialog} />
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
    date: '20 October to 24 October, 2023',
    menu: {
      title: 'Full Event Menu',
      menuImages: [
        'shashthi_dinner.png',
        'saptami_lunch.png',
        'saptami_dinner.png',
        'ashtami_lunch.png',
        'ashtami_dinner.png',
        'nabami_lunch.png',
        'nabami_dinner.png',
        'dashami_lunch.png',
        'dashami_dinner.png'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/781129/31566477'
  },
  {
    type: 'weekend',
    title: 'Weekend Pass',
    date: '20 October to 22 October, 2023',
    menu: {
      title: 'Full Weekend Menu',
      menuImages: [
        'shashthi_dinner.png',
        'saptami_lunch.png',
        'saptami_dinner.png',
        'ashtami_lunch.png',
        'ashtami_dinner.png'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/781083/31566431'
  },
  {
    type: 'shashthi',
    title: 'Shashthi Pass',
    date: '20 October, 2023',
    menu: {
      title: 'Shashthi Menu',
      menuImages: ['shashthi_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/781085/31566433'
  },
  {
    type: 'saptami',
    title: 'Saptami Pass',
    date: '21 October, 2023',
    menu: {
      title: 'Saptami Menu',
      menuImages: ['saptami_lunch.png', 'saptami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/781087/31566435'
  },
  {
    type: 'ashtami',
    title: 'Ashtami Pass',
    date: '22 October, 2023',
    menu: {
      title: 'Ashtami Menu',
      menuImages: ['ashtami_lunch.png', 'ashtami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/781089/31566437'
  },
  {
    type: 'nabami',
    title: 'Nabami Pass',
    date: '23 October, 2023',
    menu: {
      title: 'Nabami Menu',
      menuImages: ['nabami_lunch.png', 'nabami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/781091/31566439'
  },
  {
    type: 'dashami',
    title: 'Dashami Pass',
    date: '24 October, 2023',
    menu: {
      title: 'Dashami Menu',
      menuImages: ['dashami_lunch.png', 'dashami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/781093/31566441'
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
