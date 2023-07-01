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
          Durga Puja is the most awaited festival of Bengal (present day West
          Bengal of India). The very first grand Durga Puja in recorded history
          is said to have been celebrated in the late 1500s.
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
          It was initially celebrated by affluent families of Bengal as a show
          of their social prestige, political power and wealth.
          <br />
          <br /> Later in the 1790's, the idea of “Barowari Puja” was conceived
          in the Hooghly district of Bengal to break away from this tradition of
          exclusivity of these affluent families. It was said that a group of
          twelve friends together started a Puja where the community can come
          together and pray to the Goddess Durga, creating the first community
          Durga Puja in Bengal, from where the format also gets its name -
          “Baro” for twelve and “yari” for friends. Since then, the enthusiasm
          and participation of common people increased the numbers of Barowari
          Durga Puja throughout the state of Bengal. But, it took almost 120
          years for Barwari Puja to reach Calcutta (present day Kolkata), the
          then seat of culture and Freedom movement in British ruled India.
          <br />
          <br />
          But in the late 1920's the community Durga Puja evolved into an all
          embracing Sarbojanin Durga Puja. The word Sarbojanin comprises two
          words - “Sarbo”, meaning, “For all” and “Jan” means “people”. So
          therefore the word Sarbojanin means “For all the people''. Late
          Atindranath Bose introduced the first "Sarbojanin" Durga Puja in
          Bengal as well as India in which anybody, irrespective of religion,
          caste and creed could participate in the auspicious occasion. This
          puja was organized to build a feeling of unity and brotherhood among
          all.
        </Typography>
      </Grid>
    </PageContainer>
  );
};
