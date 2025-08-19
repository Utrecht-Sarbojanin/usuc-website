import { Button, Chip, Grid, Typography } from '@mui/material';
import { PageContainer } from '../PageContainer';
import { DonationCategory } from '../../models/DonationCategory';

export const Donation = () => {
  const donationCategories: DonationCategory[] = [
    {
      title: 'Pujor Samogri (all days)',
      value: '151',
      link: 'https://pay.sumup.com/b2c/QNCCD1TJ'
    },
    {
      title: 'Ashtami Bhog',
      value: '101',
      link: 'https://pay.sumup.com/b2c/QOZRKSJN'
    },
    {
      title: 'Mayer Saree',
      value: '51',
      link: 'https://pay.sumup.com/b2c/Q4D0ZPUC'
    },
    {
      title: 'Ashtami Sandhi Puja',
      value: '51',
      link: 'https://pay.sumup.com/b2c/QEY8RYXW'
    },
    {
      title: 'Dashami Dadhi Karma',
      value: '51',
      link: 'https://pay.sumup.com/b2c/QJVM4UEJ'
    },
    {
      title: 'Nabami Bhog',
      value: '51',
      link: 'https://pay.sumup.com/b2c/Q91DYG03'
    },
    {
      title: 'Saptami Bhog',
      value: '51',
      link: 'https://pay.sumup.com/b2c/QQLYH4PJ'
    },
    {
      title: 'Nabami Sandhya Arati',
      value: '31',
      link: 'https://pay.sumup.com/b2c/QSHQ58V7'
    },
    {
      title: 'Saptami Sandhya Arati',
      value: '31',
      link: 'https://pay.sumup.com/b2c/QNRIKZ58'
    },
    {
      title: 'Ashtami Anjali',
      value: '31',
      link: 'https://pay.sumup.com/b2c/Q3FFR2AT'
    },
    {
      title: 'Nabami Anjali',
      value: '31',
      link: 'https://pay.sumup.com/b2c/QPOZRHW3'
    },
    {
      title: 'Saptami Anjali',
      value: '31',
      link: 'https://pay.sumup.com/b2c/Q3GM7BT6'
    }
  ];
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
          You may also donate in one or more of the following categories to
          support Durga Puja 2025:
          <br />
        </Typography>
        <ul>
          {donationCategories.map((category, index) => (
            <li
              key={index}
              style={{ paddingTop: '10px', paddingBottom: '10px' }}>
              {category.title}
              <Chip
                sx={{
                  fontSize: '15px',
                  marginLeft: '10px'
                }}
                label={`Donate €${category.value}`}
                color="secondary"
                component="a"
                href={category.link}
                target="_blank"
                clickable
              />
            </li>
          ))}
        </ul>
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
