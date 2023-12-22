import ImageList from '@mui/material/ImageList';
import { PageContainer, theme } from '../PageContainer';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = () => {
  return (
    <PageContainer title="Gallery">
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(1).jpg')}
            loading="lazy"
            alt={'gallery_1'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(2).jpg')}
            loading="lazy"
            alt={'gallery_2'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(3).jpg')}
            loading="lazy"
            alt={'gallery_3'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(4).jpg')}
            loading="lazy"
            alt={'gallery_4'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(5).jpg')}
            loading="lazy"
            alt={'gallery_5'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(6).jpg')}
            loading="lazy"
            alt={'gallery_6'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(7).jpg')}
            loading="lazy"
            alt={'gallery_7'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(8).jpg')}
            loading="lazy"
            alt={'gallery_8'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(9).jpg')}
            loading="lazy"
            alt={'gallery_9'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(10).jpg')}
            loading="lazy"
            alt={'gallery_10'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(11).jpg')}
            loading="lazy"
            alt={'gallery_11'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(12).jpg')}
            loading="lazy"
            alt={'gallery_12'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(13).jpg')}
            loading="lazy"
            alt={'gallery_13'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(14).jpg')}
            loading="lazy"
            alt={'gallery_14'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(15).jpg')}
            loading="lazy"
            alt={'gallery_15'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(16).jpg')}
            loading="lazy"
            alt={'gallery_16'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(17).jpg')}
            loading="lazy"
            alt={'gallery_17'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(18).jpg')}
            loading="lazy"
            alt={'gallery_18'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(19).jpg')}
            loading="lazy"
            alt={'gallery_19'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(20).jpg')}
            loading="lazy"
            alt={'gallery_20'}
          />
        </ImageListItem>
        <ImageListItem sx={{ margin: '10px' }}>
          <img
            src={require('../../static/photos/gallery_(21).jpg')}
            loading="lazy"
            alt={'gallery_21'}
          />
        </ImageListItem>
      </ImageList>
    </PageContainer>
  );
};
