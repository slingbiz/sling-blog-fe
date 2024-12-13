import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    backgroundImage: 'url("/images/blog-hero.png?height=500&width=1920")',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
  },
  blogH1: {fontSize: 38, fontWeight: 'bold'},
  blogHeroDesc: {
    fontSize: 20,
    color: '#033036',
    margin: theme.spacing(2, 0),
  },
}));

const HeroSection = ({
  title = 'Sling',
  subtitle = 'Blog',
  description = 'Discover the latest updates, expert insights, emerging technologies, and curated resources.',
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Box className={classes.heroOverlay} />
      <Box className={classes.heroContent}>
        <Typography variant='h1' component='h1' className={classes.blogH1}>
          <span style={{color: '#033036'}}>{title}</span>
          <span
            style={{
              background: 'rgb(255 152 0)',
              color: 'white',
              borderRadius: '10px',
              padding: '0px 12px',
              margin: '0px 5px',
            }}>
            {subtitle}
          </span>
        </Typography>
        <Typography variant='h4' className={classes.blogHeroDesc}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
