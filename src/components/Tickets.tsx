import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Ticket } from "../models/Ticket";

const ticketList: Ticket[] = [
  {
    type: 'full_event',
    title: 'Full Event Pass',
    date: '16 October to 20 October, 2026',
    menu: {
      title: 'Full Event Menu',
      menuImages: [
        // 'one_menu.jpg'
        // 'panchami_dinner.jpg',
        // 'shashthi_lunch.jpg',
        'shashthi_dinner.jpg',
        'saptami_lunch.jpg',
        'saptami_dinner.jpg',
        'ashtami_lunch.jpg',
        'ashtami_dinner.jpg',
        'nabami_lunch.jpg',
        'nabami_dinner.jpg',
        'dashami_lunch.jpg',
        'dashami_dinner.jpg'
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/874503/31846683'
  },
  {
    type: 'weekend',
    title: 'Weekend Pass',
    date: '16 October to 18 October, 2026',
    menu: {
      title: 'Full Weekend Menu',
      menuImages: [
        // 'one_menu.jpg'
        'shashthi_dinner.jpg',
        'saptami_lunch.jpg',
        'saptami_dinner.jpg',
        'ashtami_lunch.jpg',
        'ashtami_dinner.jpg',
      ]
    },
    link: 'https://usuc.yapsody.com/event/book/874505/31846685'
  },
  // {
  //   type: 'panchami',
  //   title: 'Panchami Pass',
  //   date: '27 September, 2025',
  //   menu: {
  //     title: 'Panchami Menu',
  //     menuImages: [/* 'one_menu.jpg'*/ 'panchami_dinner.jpg' ]
  //   },
  //   link: 'https://usuc.yapsody.com/event/book/853089/31765559'
  // },
  {
    type: 'shashthi',
    title: 'Shashthi Pass',
    date: '16 October, 2026',
    menu: {
      title: 'Shashthi Menu',
      menuImages: [/*'one_menu.jpg', 'shashthi_lunch.jpg',*/ 'shashthi_dinner.jpg' ]
    },
    link: 'https://usuc.yapsody.com/event/book/874685/31847661'
  },
  {
    type: 'saptami',
    title: 'Saptami Pass',
    date: '17 October, 2026',
    menu: {
      title: 'Saptami Menu',
      menuImages: [/*'one_menu.jpg',*/ 'saptami_lunch.jpg', 'saptami_dinner.jpg']
    },
    link: 'https://usuc.yapsody.com/event/book/874691/31847669'
  },
  {
    type: 'ashtami',
    title: 'Ashtami Pass',
    date: '18 October, 2026',
    menu: {
      title: 'Ashtami Menu',
      menuImages: [/*'one_menu.jpg',*/ 'ashtami_lunch.jpg', 'ashtami_dinner.jpg']
    },
    link: 'https://usuc.yapsody.com/event/book/874693/31847673'
  },
  // {
  //   type: 'dandiya',
  //   title: 'Dandiya Night Pass',
  //   date: '19 October, 2026',
  //   menu: {
  //     title: 'Dashami Menu',
  //     menuImages: []
  //   },
  //   link: 'https://usuc.yapsody.com/event/book/853095/31765565'
  // },
  {
    type: 'nabami',
    title: 'Nabami Pass',
    date: '19 October, 2026',
    menu: {
      title: 'Nabami Menu',
      menuImages: [/* 'one_menu.jpg',*/ 'nabami_lunch.jpg', 'nabami_dinner.jpg']
    },
    link: 'https://usuc.yapsody.com/event/book/874697/31847681'
  },
  {
    type: 'dashami',
    title: 'Dashami Pass',
    date: '20 October, 2026',
    menu: {
      title: 'Dashami Menu',
      menuImages: [/*'one_menu.jpg',*/ 'dashami_lunch.jpg',  'dashami_dinner.jpg']
    },
    link: 'https://usuc.yapsody.com/event/book/874699/31847683'
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