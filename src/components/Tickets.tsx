import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Ticket } from "../models/Ticket";

const ticketList: Ticket[] = [
  {
    type: 'full_event',
    title: 'Full Event Pass',
    date: '27 September to 1 October, 2025',
    menu: {
      title: 'Full Event Menu',
      menuImages: [
        // 'shashthi_dinner.jpg',
        // 'saptami_lunch.jpg',
        // 'saptami_dinner.jpg',
        // 'ashtami_lunch.jpg',
        // 'ashtami_dinner.jpg',
        // 'nabami_lunch.jpg',
        // 'nabami_dinner.jpg',
        // 'dashami_lunch.jpg',
        // 'dashami_dinner.jpg'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/853003/31765473'
  },
  {
    type: 'weekend',
    title: 'Weekend Pass',
    date: '27 September to 28 September, 2025',
    menu: {
      title: 'Full Weekend Menu',
      menuImages: [
        // 'ashtami_dinner.jpg',
        // 'nabami_lunch.jpg',
        // 'nabami_dinner.jpg',
        // 'dashami_lunch.jpg',
        // 'dashami_dinner.jpg'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/853087/31765557'
  },
  {
    type: 'panchami',
    title: 'Panchami Pass',
    date: '27 September, 2025',
    menu: {
      title: 'Shashthi Menu',
      menuImages: [/* 'shashthi_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/853089/31765559'
  },
  {
    type: 'shashthi',
    title: 'Shashthi Pass',
    date: '28 September, 2025',
    menu: {
      title: 'Shashthi Menu',
      menuImages: [/* 'shashthi_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/853093/31765563'
  },
  {
    type: 'saptami',
    title: 'Saptami Pass',
    date: '29 September, 2025',
    menu: {
      title: 'Saptami Menu',
      menuImages: [/* 'saptami_lunch.jpg', 'saptami_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/820493/31695711'
  },
  {
    type: 'ashtami',
    title: 'Ashtami Pass',
    date: '30 September, 2025',
    menu: {
      title: 'Ashtami Menu',
      menuImages: [/* 'ashtami_lunch.jpg', 'ashtami_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/853095/31765565'
  },
  {
    type: 'nabami',
    title: 'Nabami Pass',
    date: '1 October, 2025',
    menu: {
      title: 'Nabami Menu',
      menuImages: [/* 'nabami_lunch.jpg', 'nabami_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/853097/31765567'
  },
  {
    type: 'dashami',
    title: 'Dashami Pass',
    date: '1 October, 2025',
    menu: {
      title: 'Dashami Menu',
      menuImages: [/* 'dashami_lunch.jpg', 'dashami_dinner.jpg' */]
    },
    link: 'https://usuc.yapsody.com/event/book/853099/31765569'
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