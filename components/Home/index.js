import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import HeroBanner from '../../widgets/HeroBanner';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
  },
  sectionDark: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  featureImage: {
    maxWidth: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <HeroBanner />
      
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Feature 1</Typography>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus felis sed sapien convallis, eu consequat urna suscipit.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Feature 2</Typography>  
              <Typography>Praesent vel metus id nulla mollis lacinia. Donec nec tellus vel lacus placerat pretium.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Feature 3</Typography>
              <Typography>Nulla facilisi. Nunc vitae metus vitae libero tempor feugiat. Aliquam erat volutpat.</Typography>  
            </Grid>
          </Grid>
        </Container>
      </section>
      
      <section className={clsx(classes.section, classes.sectionDark)}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <img src="/images/illustration.png" alt="Illustration" className={classes.featureImage} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>About Us</Typography>
              <Typography paragraph>
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
                sit amet adipiscing sem neque sed ipsum.
              </Typography>
              <Button variant="contained" color="primary">Learn More</Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>Get Started</Typography>
          <Typography align="center">
            Ready to dive in? Sign up now and start using our amazing product!
          </Typography>
          <Grid container justifyContent="center">
            <Button variant="contained" color="primary" size="large">
              Sign Up
            </Button>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home;