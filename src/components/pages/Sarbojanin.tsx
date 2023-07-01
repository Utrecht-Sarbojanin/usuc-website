import { Grid, Typography } from '@mui/material';
import React from 'react';
import { PageContainer } from '../PageContainer';

export const Sarbojanin = () => {
  return (
    <PageContainer title="Sarbojanin Puja of Bengal">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          color={'secondary'}
          component="p">
          Durga Puja was declared an Intangible Cultural Heritage of Humanity by
          UNESCO, in 2021. "Durga Puja is a religious festival that has become a
          cultural and secular event. It has also become a space for social and
          artistic activities."
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
          Utrecht Sarbojanin Durgotsav 20 - 24 October 2023 is a 5-day long
          festival and we aim to deliver a spectacular event and the biggest
          Indian International Festival in the Netherlands. This is an excellent
          opportunity for people to experience the rich multicultural heritage
          of India and also to engage in cultural exchanges with people from
          different communities. You can download the brochure from here.
          <br />
          <br /> The event will take place in a beautifully articulated venue
          with one of the biggest Durga Idols in mainland Europe. The event will
          be full of various cultural activities from different communities.{' '}
          <br />
          <br />
          We are cordially inviting everyone to join us and celebrate this great
          Indian International Festival - Utrecht Sarbojanin Durgotsav 2023.
        </Typography>
      </Grid>
    </PageContainer>
  );
};
