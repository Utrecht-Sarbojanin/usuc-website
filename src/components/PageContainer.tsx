import {
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  Typography,
  createTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { themeOptions } from '../Theme';
import { useState } from 'react';

export const theme: Theme = createTheme(themeOptions);

export const PageContainer = (props: any) => {
  const [open, isOpen] = useState(false);

  const toggleDrawer = (toggle: any) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    isOpen(toggle);
  };
  return (
    <>
      <Container
        sx={{
          [theme.breakpoints.down('lg')]: {
            marginTop: '20px'
          },
          [theme.breakpoints.up('lg')]: {
            marginTop: '35px'
          }
        }}
        maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Grid xs={12}>
              <Typography
                sx={{
                  fontSize: '1.5em',
                  marginTop: '20px',
                  letterSpacing: '1.9px',
                  marginBottom: '20px'
                }}
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom>
                <IconButton
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu">
                  <MenuIcon
                    sx={{ fontSize: '1.2em' }}
                    onClick={toggleDrawer(true)}
                  />
                </IconButton>
                {props.title}
              </Typography>
              {/* <Grid item xs={8}>
              <Typography
                sx={{
                  fontSize: '1.5em',
                  marginTop: '20px',
                  letterSpacing: '1.9px',
                  marginBottom: '20px'
                }}
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom>
                {props.title}
              </Typography>
            </Grid> */}
              {/* <Grid sx={{ textAlign: 'right', paddingTop: '10px' }} item xs={4}>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ padding: 0 }}>
                <MenuIcon sx={{ fontSize: '1.2em' }} />
              </IconButton>
            </Grid> */}
            </Grid>

            <Grid sx={{ minHeight: '70vh' }} container direction="row" xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Drawer
        sx={{
          width: '220px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '220px',
            boxSizing: 'border-box'
          }
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}>
        <List>
          {[
            'Home',
            'Durgotsav 2023',
            'Brochure',
            'Registration',
            'Contact',
            'Donate',
            'About Us'
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
