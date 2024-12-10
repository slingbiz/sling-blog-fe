import React from 'react';
import {Drawer, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    padding: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const CustomSidebar = ({isOpen, children}) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent' // Make it persistent for larger screens like laptops
      anchor='left'
      open={isOpen} // Ensure isOpen is passed correctly
      classes={{
        paper: classes.drawerPaper,
      }}>
      <Box>{children}</Box>
    </Drawer>
  );
};

export default CustomSidebar;
