import React, {useContext} from 'react';
import {onToggleAppDrawer} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {Box} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import AppContext from '../../utils/context/AppContext';
import AppEnums from '../../utils/constants/AppEnums';
import {makeStyles} from '@material-ui/core/styles';

const {Fonts} = AppEnums;

const useStyles = makeStyles((theme) => ({
  appsContainer: (props) => ({
    display: 'flex',
  }),
  appsSidebar: {
    [theme.breakpoints.up('lg')]: {
      width: '17rem',
    },
    [theme.breakpoints.up('xl')]: {
      width: '20rem',
    },
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

const FilterToggle = ({widgetProps}) => {
  const dispatch = useDispatch();
  let {h1} = widgetProps;
  const {footer, navStyle} = useContext(AppContext);
  const classes = useStyles({footer, navStyle});

  return (
    <Box
      mb={{xs: -3, md: 0, lg: 0}}
      mt={{xs: -3, lg: 0}}
      display='flex'
      alignItems='center'>
      <Hidden lgUp>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='open drawer'
          onClick={() => dispatch(onToggleAppDrawer())}>
          <FilterListIcon className={classes.menuIcon} />
        </IconButton>
      </Hidden>
      <Box
        component='h2'
        color='text.primary'
        fontWeight={Fonts.BOLD}
        fontSize={16}>
        {h1.value}
      </Box>
    </Box>
  );
};

export default FilterToggle;
