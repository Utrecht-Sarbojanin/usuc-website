import ImageList from '@mui/material/ImageList';
import { PageContainer } from '../PageContainer';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

export const Gallery = () => {
  const images: string[] = [];

  for (let i = 1; i <= 21; i++) {
    images.push('gallery_(' + i + ')');
  }

  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const openGalleryDialog = (imageSource: string) => {
    setGalleryDialogOpen(true);
    setImageSource(imageSource);
  };

  const handleGalleryDialogClose = () => {
    setGalleryDialogOpen(false);
    setImageSource('');
  };

  return (
    <PageContainer title="Gallery">
      <ImageList variant="masonry" cols={3} gap={2}>
        {images.map((image) => {
          return (
            <GalleryItem image={image} openGalleryDialog={openGalleryDialog} />
          );
        })}
      </ImageList>
      <Grid item xs={15}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="center"
          color={'primary'}
          component="p">
          <br />
          <br />
          For more pictures:{' '}
          <Link
            sx={{ textDecoration: 'none', color: '#c0c0c0' }}
            href="https://www.flickr.com/photos/usuc/albums"
            target="_blank">
            Click here
          </Link>
        </Typography>
      </Grid>
      <GalleryItemDialog
        open={galleryDialogOpen}
        handleClose={handleGalleryDialogClose}
        src={imageSource}
      />
    </PageContainer>
  );
};

const GalleryItem = (props: any) => {
  return (
    <ImageListItem sx={{ margin: '10px' }}>
      <img
        src={require(`../../static/photos/${props.image}.jpg`)}
        loading="lazy"
        alt={`${props.image}`}
        onClick={() => props.openGalleryDialog(props.image)}
      />
    </ImageListItem>
  );
};

export const GalleryItemDialog = (props: any) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'sm'}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogContent
        dividers={true}
        sx={{
          overflow: 'auto',
          padding: '5',
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
        {props.src === '' ? (
          ''
        ) : (
          <ImageList variant="masonry" cols={1}>
            <ImageListItem>
              <img
                src={require(`../../static/photos/${props.src}.jpg`)}
                loading="lazy"
                alt={`${props.src}`}
              />
            </ImageListItem>
          </ImageList>
        )}
      </DialogContent>
    </Dialog>
  );
};
