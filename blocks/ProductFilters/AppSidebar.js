import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {onToggleAppDrawer} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  appsSidebar: {
    height: '100%',
  },
  appsMainContent: () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
  appSidebarDrawer: {
    width: '19rem',
    '& .listItem': {
      zIndex: 1305,
    },
  },
  scLauncher: {
    '& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover':
      {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
  },
}));

const AppSidebar = (props) => {
  const {
    isAppDrawerOpen,
    footer,
    navStyle,
    fullView,
    style,
    sidebarContent,
    children,

    muiWidths,
  } = props;

  const classes = useStyles({footer, navStyle, fullView});
  const useStylesBase = makeStyles({
    root: {
      ...style,
    },
  });
  const classesBase = useStylesBase();
  const className = clsx(classes.appsSidebar, classesBase.root);
  const dispatch = useDispatch();

  return (
    <Box className={className} {...muiWidths}>
      <Hidden lgUp>
        <Drawer
          open={isAppDrawerOpen}
          onClose={() => {
            dispatch(onToggleAppDrawer());
          }}
          classes={{
            paper: clsx(classes.appSidebarDrawer),
          }}
          style={{position: 'absolute'}}>
          {sidebarContent || children}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Card>{sidebarContent || children}</Card>
      </Hidden>
    </Box>
  );
};

export default AppSidebar;
