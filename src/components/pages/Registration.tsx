import { Grid, Link, Typography } from '@mui/material';
import { PageContainer } from '../PageContainer';
import { useState } from 'react';
import { MenuDialog } from '../MenuDialog';
import { EMPTY_TICKET, Ticket } from '../../models/Ticket';
import { DURGA_PUJA_2024 } from '../../models/USUCEvent';
import { Tickets } from '../Tickets';

export const Registration = () => {
  const isEventPlanned = true;
  const eventData = DURGA_PUJA_2024;
  const isMenuAvailable = true;
  const isEventScheduleAvailable = false;

  const [menuDialogOpen, setMenuDialogOpen] = useState(false);

  const [ticket, setTicket] = useState<Ticket>(EMPTY_TICKET);

  const openMenuDialog = (ticket: Ticket) => {
    setMenuDialogOpen(true);
    setTicket(ticket);
  };

  const handleMenuDialogClose = () => {
    setMenuDialogOpen(false);
    setTicket(EMPTY_TICKET);
  };

  return (
    <PageContainer title={`Registration for ${eventData.name}`}>
      <Grid item xs={12}>
        {isEventPlanned ? (
          <EventInfo eventData={eventData} isMenuAvailable={isMenuAvailable} />
        ) : (
          <Typography
            sx={{
              fontSize: '18px'
            }}
            variant="body1"
            align="center"
            component="p">
            No upcoming event planned. Please come back later.
            <br />
            <br />
          </Typography>
        )}
      </Grid>

      {isEventPlanned ? <Tickets openMenuDialog={openMenuDialog} /> : ''}

      <Grid item xs={15}>
        {isEventPlanned ? (
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
        ) : (
          ''
        )}
      </Grid>
      <MenuDialog
        open={menuDialogOpen}
        handleClose={handleMenuDialogClose}
        ticket={ticket}
      />
    </PageContainer>
  );
};

const EventInfo = (props: any) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: '18px'
        }}
        variant="body1"
        align="center"
        color={'secondary'}
        component="p">
        {props.eventData.date ? (
          <>
            <b>Date:</b> {props.eventData.date}
            <br />
          </>
        ) : (
          ''
        )}
        {props.eventData.time ? (
          <>
            <b>Time:</b> {props.eventData.time}
            <br />
          </>
        ) : (
          ''
        )}
        {props.eventData.venue ? (
          <>
            <b>Venue:</b> {props.eventData.venue}
            <br />
            <br />
          </>
        ) : (
          ''
        )}
      </Typography>
      {props.isMenuAvailable ? (
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          component="p">
          (To view the food menu of each day, click on the 'See Menu' button on
          pass type)
          <br />
          <br />
        </Typography>
      ) : (
        ''
      )}
    </>
  );
};
