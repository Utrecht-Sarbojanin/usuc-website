import { Button, Grid, Typography } from '@mui/material';
import { PageContainer } from '../PageContainer';

export const Donation = () => {
  return (
    <PageContainer title="Make a Donation">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          As we continue to prepare for future events, we kindly request your
          support in making them grand successes.
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
          Your contributions play a vital role in bringing the vibrant spirit of
          the various cultural events to life in the city of Utrecht. Every
          donation, no matter the amount, makes a significant impact on our
          festivities. To make a donation, please use the secure payment link
          provided below.
        </Typography>

        <Button
          sx={{
            marginTop: '20px'
          }}
          variant="contained"
          href="https://bunq.me/StichtingUtrechtSarbojaninUtsavCommittee0"
          target="_blank">
          Make a donation securely
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
          e.g. “Donated By: Vincent V G (v.vangogh@musea.nl) +31612345678”
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
