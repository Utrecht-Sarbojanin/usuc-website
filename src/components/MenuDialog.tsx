import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
  Theme,
  createTheme
} from '@mui/material';
import { Ticket } from '../models/Ticket';
import { themeOptions } from '../Theme';

export const theme: Theme = createTheme(themeOptions);

export const MenuDialog = (props: any) => {
  const ticket: Ticket = props.ticket;

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'sm'}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">{ticket.menu.title}</DialogTitle>
      <DialogContent
        dividers={true}
        sx={{
          overflow: 'auto',
          scrollbarwidth: 'thick',
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundcolor: '#888'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          }
        }}>
        <ImageList variant="masonry" cols={1}>
          {ticket.menu.menuImages.map((item, index) => (
            <ImageListItem sx={{ margin: '10px' }} key={item}>
              <img
                src={require(`../static/menus/${item}`)}
                loading="lazy"
                alt={`menu_${ticket.type}_${index}`}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ marginLeft: '5px', marginRight: '5px' }}
          variant={'outlined'}
          color={'inherit'}
          onClick={props.handleClose}>
          Cancel
        </Button>
        <Button
          sx={{ marginLeft: '5px', marginRight: '5px' }}
          variant={'contained'}
          color={'secondary'}
          href={ticket.link}
          target="_blank">
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};
