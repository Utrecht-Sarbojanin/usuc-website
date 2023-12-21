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
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CollectionsIcon from '@mui/icons-material/Collections';

import { themeOptions } from '../Theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const theme: Theme = createTheme(themeOptions);

export const PageContainer = (props: any) => {
  const [open, isOpen] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (path: String) => {
    navigate('/' + path);
  };

  const getIcon = (item: string) => {
    switch (item) {
      case 'Home':
        return <HomeIcon />;
      case 'Durgotsav 2023':
        return <FavoriteIcon />;
      case 'Brochure':
        return <MenuBookIcon />;
      case 'Registration':
        return <EditNoteIcon />;
      case 'Gallery':
        return <CollectionsIcon />;
      case 'Contact':
        return <LocalPhoneIcon />;
      case 'Donate':
        return <ThumbUpIcon />;
      case 'About Us':
        return <Diversity3Icon />;
    }
  };

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

  const MenuListItem = (props: any) => {
    return (
      <ListItem key={props.item.name} disablePadding>
        {props.item.name === 'Brochure' ? (
          <ListItemButton
            href="https://drive.google.com/file/d/1cRMWrnlp7L6tYN-5HQhtxb7P6AINi0Gm/view?usp=sharing"
            target="_blank">
            {getIcon(props.item.name)}
            <ListItemText
              sx={{ marginLeft: '10px' }}
              primary={props.item.name}
            />
          </ListItemButton>
        ) : (
          <ListItemButton
            onClick={() => {
              navigateTo(props.item.link);
            }}>
            {getIcon(props.item.name)}
            <ListItemText
              sx={{ marginLeft: '10px' }}
              primary={props.item.name}
            />
          </ListItemButton>
        )}
      </ListItem>
    );
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
            </Grid>

            <Grid sx={{ minHeight: '60vh' }} container direction="row" xs={12}>
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
            paddingTop: '20px',
            width: '220px',
            boxSizing: 'border-box'
          }
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}>
        <List>
          {[
            { name: 'Home', link: '' },
            { name: 'Durgotsav 2023', link: 'durgotsav2023' },
            { name: 'Brochure', link: '' },
            { name: 'Gallery', link: 'gallery' },
            // { name: 'Registration', link: 'register' },
            { name: 'Contact', link: 'contact' },
            { name: 'Donate', link: 'donate' },
            { name: 'About Us', link: 'about' }
          ].map((item, index) => (
            <MenuListItem item={item} />
          ))}
        </List>
      </Drawer>
    </>
  );
};
