import { Grid, Typography } from '@mui/material';
import React from 'react';
import { PageContainer } from '../PageContainer';

export const Memories = () => {
  return (
    <PageContainer title="Memories">
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          component="p">
          Coming Soon...
        </Typography>
      </Grid>
    </PageContainer>
  );
};
