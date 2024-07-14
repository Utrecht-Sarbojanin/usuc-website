import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Ticket } from "../models/Ticket";

const ticketList: Ticket[] = [
    {
      type: 'full_event',
      title: 'Full Event Pass',
      date: '14 April, 2024',
      menu: {
        title: 'Full Event Menu',
        menuImages: ['boishakh_non_veg_menu.jpg', 'boishakh_veg_menu.jpg']
      },
      link: 'https://usuc.yapsody.com/event/book/803521/31648557'
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