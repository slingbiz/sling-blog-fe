import React, {useState} from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Hidden,
  useMediaQuery,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FlagIcon from '@material-ui/icons/Flag'; // Placeholder for the flag icon
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {border: 'none'},
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 36,
    marginRight: theme.spacing(2),
  },
  iconButton: {
    padding: theme.spacing(1),
  },
  toolbar: {
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  appBar: {
    width: '100%',
    boxShadow: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box position='static' color='default' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='logo'>
          <img
            src={isMobile ? '/images/logo.png' : '/images/logo-white.png'}
            alt='Logo'
            className={classes.logo}
          />
        </IconButton>

        {/* Title */}
        <Typography variant='h6' className={classes.title}>
          Demo
        </Typography>

        {/* Hidden for larger screens */}
        <Hidden smUp>
          <IconButton edge='end' color='inherit' onClick={handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
        </Hidden>

        {/* Inline icons for larger screens */}
        <Hidden xsDown>
          <Grid
            display='flex'
            spacing={5}
            container
            justifyContent='flex-end'
            flexDirection='row'>
            <Grid item>
              <IconButton className={classes.iconButton} color='inherit'>
                <MessageIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.iconButton} color='inherit'>
                <NotificationsIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.iconButton} color='inherit'>
                <FlagIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>

        {/* Dropdown menu for mobile screens */}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            <MessageIcon /> Messages
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NotificationsIcon /> Notifications
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <FlagIcon /> Language
          </MenuItem>
        </Menu>
      </Toolbar>
    </Box>
  );
};

export default Header;
