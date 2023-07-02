import { Button, Grid, Typography } from '@mui/material';
import { PageContainer } from '../PageContainer';

export const Registration = () => {
  return (
    <PageContainer title="Registration for Durgotsav 2023">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          The registrations for Utrecht Sarbojanin Durgotsav 2023 (Durga Puja)
          have not yet started. Please watch this space for further updates.
          They will open shortly.
          <br />
          <br />
        </Typography>

        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          However, in the meantime, as we continue to prepare for the event, we
          kindly request your support in making it a grand success. Your
          contributions play a vital role in bringing the vibrant spirit of
          Durga Puja to life in the city of Utrecht. Every donation, no matter
          the size, makes a significant impact on our festivities. To make a
          donation, please use the secure payment link provided below.
        </Typography>

        <Button
          sx={{
            marginTop: '20px'
          }}
          variant="contained"
          href="https://bunq.me/StichtingUtrechtSarbojaninUtsavCommittee0"
          target="_blank">
          Make a donation securedly
        </Button>

        <Typography
          sx={{
            marginTop: '20px',
            fontSize: '16px'
          }}
          variant="body1"
          align="justify"
          component="p">
          <b>Important</b> : Write the below details in the description of
          payment message
          <br />
        </Typography>
        <Typography
          sx={{
            fontSize: '16px'
          }}
          variant="body1"
          align="left"
          color={'secondary'}
          component="p">
          “Donated By: [your full name] [email id] [phone number]”
          <br />
          e.g. “Donated By: Vincent V G (v.vangogh@musea.nl) +31611863612”
        </Typography>
        <Typography
          sx={{
            marginTop: '20px',
            fontSize: '18px'
          }}
          variant="body1"
          align="left"
          component="p">
          Thank you for your generosity and unwavering support. Together, let's
          create unforgettable memories and celebrate our rich cultural
          heritage!
          <br />
        </Typography>
        <Typography
          sx={{
            marginTop: '20px',
            fontSize: '16px'
          }}
          variant="body1"
          align="left"
          component="p">
          If you have any questions, please do not hesitate to contact us via
          email at: <b>info@utrechtsarbojanin.nl</b>
        </Typography>
      </Grid>
    </PageContainer>
  );
};
