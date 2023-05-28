import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Theme,
  Typography,
  createTheme
} from '@mui/material';
import { themeOptions } from '../../Theme';
import { ImageCredit } from '../ImageCredit';
import { PageContainer } from '../PageContainer';

const theme: Theme = createTheme(themeOptions);

export const About = () => {
  return (
    <PageContainer title="About Us">
      <Grid item xs={12} lg={7}>
        <Typography
          sx={{
            fontSize: '18px'
          }}
          variant="body1"
          align="justify"
          component="p">
          Stichting Utrecht Sarbojanin Utsav Committee (USUC) is a vibrant and
          dynamic Indian Bengali association based in the Netherlands. Our
          mission is to promote and celebrate the cultural heritage of Bengal
          through various cultural and social events. With a strong focus on
          community-building and inclusivity, USUC provides a platform for
          people from all backgrounds to come together and engage in the rich
          and diverse Indian culture. Join us in our celebrations and experience
          the warmth and hospitality of our Indian Bengali community in the
          Netherlands.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Card
          sx={{
            background: theme.palette.background.default,
            boxShadow: 'none',
            [theme.breakpoints.up('lg')]: {
              marginLeft: '30px'
            },
            [theme.breakpoints.down('lg')]: {
              marginTop: '10px'
            }
          }}>
          <CardMedia>
            <img src={require('../../static/sindur.jpg')} alt="featured" />
          </CardMedia>
          <CardContent>
            <ImageCredit />
          </CardContent>
        </Card>
      </Grid>
    </PageContainer>
  );
};
