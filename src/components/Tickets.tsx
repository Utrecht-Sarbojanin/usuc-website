import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Ticket } from "../models/Ticket";

const ticketList: Ticket[] = [
    {
    type: 'full_event',
    title: 'Full Event Pass',
    date: '9 October to 13 October, 2024',
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
    link: 'https://usuc.yapsody.com/event/book/819749/31694085'
  },
  {
    type: 'weekend',
    title: 'Weekend Pass',
    date: '11 October to 13 October, 2024',
    menu: {
      title: 'Full Weekend Menu',
      menuImages: [
        'ashtami_dinner.png',
        'nabami_lunch.png',
        'nabami_dinner.png',
        'dashami_lunch.png',
        'dashami_dinner.png'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/820507/31695729'
  },
  {
    type: 'shashthi',
    title: 'Shashthi Pass',
    date: '9 October, 2024',
    menu: {
      title: 'Shashthi Menu',
      menuImages: ['shashthi_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/820489/31695707'
  },
  {
    type: 'saptami',
    title: 'Saptami Pass',
    date: '10 October, 2024',
    menu: {
      title: 'Saptami Menu',
      menuImages: ['saptami_lunch.png', 'saptami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/820493/31695711'
  },
  {
    type: 'ashtami',
    title: 'Ashtami Pass',
    date: '11 October, 2024',
    menu: {
      title: 'Ashtami Menu',
      menuImages: ['ashtami_lunch.png', 'ashtami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/820499/31695717'
  },
  {
    type: 'nabami',
    title: 'Nabami Pass',
    date: '12 October, 2024',
    menu: {
      title: 'Nabami Menu',
      menuImages: ['nabami_lunch.png', 'nabami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/820503/31695725'
  },
  {
    type: 'dashami',
    title: 'Dashami Pass',
    date: '13 October, 2024',
    menu: {
      title: 'Dashami Menu',
      menuImages: ['dashami_lunch.png', 'dashami_dinner.png']
    },
    link: 'https://usuc.yapsody.com/event/book/820505/31695727'
  }
  ];
  
  export const Tickets = (props: any) => {
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
              src={require(`../static/covers/cov_${ticket.type}.jpg`)}
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