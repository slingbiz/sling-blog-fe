import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'; // Importing TextField for search

const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      height: 36,
      marginRight: 10,
    },
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    blogH1: {fontSize: 38, fontWeight: 'bold'},
    blogHeroDesc: {
      fontSize: 20,
      color: '#033036',
      margin: theme.spacing(2, 0),
    },
    link: {
      margin: theme.spacing(0, 2),
      fontSize: 16,
      color: '#033036',
      '&:hover': {
        color: '#045d69',
        textDecoration: 'none',
      },
    },
    button: {
      marginLeft: theme.spacing(2),
      color: '#fff',
      fontWeight: 600,
      marginRight: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: '#ff9800',
    },
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
    searchBar: {
      marginRight: theme.spacing(3),
      '& .MuiInputBase-root': {
        borderRadius: 20, // rounded corners
        backgroundColor: '#f2f2f2', // light background for the search
      },
      '& .MuiInputBase-input': {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        width: 250, // Adjust the width as per requirement
      },
    },
  }),
);

export default function NavHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <img
              className={classes.logo}
              src={`/images/logo-white-with-name.png`}
              alt='sling-logo'
            />{' '}
            <span
              style={{
                background: 'rgb(255 152 0)',
                color: 'white',
                borderRadius: '5px',
                padding: '2px 8px',
                margin: '0px',
              }}>
              {' '}
              Blog
            </span>
          </Typography>

          {/* Search Bar */}
          <TextField
            className={classes.searchBar}
            variant='outlined'
            placeholder='Search'
            size='small'
          />

          <Hidden smDown>
            <Link href='/blog' className={classes.link}>
              Blog
            </Link>
            <Link href='/features' className={classes.link}>
              Features
            </Link>
            <Link href='/solutions' className={classes.link}>
              Solutions
            </Link>
          </Hidden>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.button}>
            Sling Studio
          </Button>
          <Hidden mdUp>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Box className={classes.heroSection}>
        <Box className={classes.heroOverlay} />
        <Box className={classes.heroContent}>
          <Typography variant='h1' component='h1' className={classes.blogH1}>
            <span style={{color: '#033036'}}> Sling</span>
            <span
              style={{
                background: 'rgb(255 152 0)',
                color: 'white',
                borderRadius: '10px',
                padding: '0px 12px',
                margin: '0px 5px',
              }}>
              Blog
            </span>
          </Typography>
          <Typography variant='h4' className={classes.blogHeroDesc}>
            Discover the latest updates, expert insights, emerging technologies,
            and curated resources.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
