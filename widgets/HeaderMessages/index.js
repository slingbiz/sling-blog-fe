import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SmsIcon from '@material-ui/icons/Sms';
import messages from '../../utils/constants/MessageNotifications';
import {makeStyles} from '@material-ui/core';
import MessageItem from './MessageItem';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import {AppEnums, IntlMessages} from 'sling-core';
const {Fonts} = AppEnums;

const useStyles = makeStyles((theme) => ({
  crPopover: {
    '& .MuiPopover-paper': {
      width: 260,
      [theme.breakpoints.up('sm')]: {
        width: 300,
      },
      [theme.breakpoints.up('xl')]: {
        width: 380,
      },
    },
    '& .scroll-submenu': {
      maxHeight: 200,
      [theme.breakpoints.up('xl')]: {
        maxHeight: 380,
      },
    },
  },
  btnPopover: {
    borderRadius: 0,
    width: '100%',
    textTransform: 'capitalize',
  },
  notiBtn: {
    justifyContent: 'flex-start',
    width: '100%',
    height: 56,
    fontSize: 16,
    borderRadius: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: theme.palette.grey[800],
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      width: 'auto',
      borderLeft: 'solid 1px',
      borderColor: theme.palette.grey[200],
      color: theme.palette.grey[400],
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
    },
  },
  smsIcon: {
    fontSize: 22,
    color: theme.palette.textSecondary,
    [theme.breakpoints.up('xl')]: {
      fontSize: 30,
    },
  },
  listRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const HeaderMessages = (props) => {
  const [anchorMessages, setAnchorMessages] = React.useState(null);

  const onClickMessagesButton = (event) => {
    setAnchorMessages(event.currentTarget);
  };

  const classes = useStyles();

  // Ref for IconButton to avoid using findDOMNode
  const iconButtonRef = React.useRef(null);

  return (
    <>
      <IconButton
        ref={iconButtonRef}
        className={clsx(classes.notiBtn, 'notiBtn')}
        aria-label='show messages'
        color='inherit'
        onClick={onClickMessagesButton}>
        <SmsIcon className={clsx(classes.smsIcon, 'smsIcon')} />
        <Hidden mdUp>
          <Box
            ml={4}
            fontSize={16}
            fontFamily='Poppins'
            fontWeight={Fonts.REGULAR}
            component='span'>
            <IntlMessages id='dashboard.messages' />
          </Box>
        </Hidden>
      </IconButton>

      <Popover
        anchorEl={anchorMessages}
        id='app-message'
        className={classes.crPopover}
        open={Boolean(anchorMessages)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => setAnchorMessages(null)}>
        <Box>
          <Box px={5} py={3}>
            <Box component='h5' fontWeight={Fonts.MEDIUM}>
              <IntlMessages id='dashboard.messages' /> ({messages.length})
            </Box>
          </Box>
          <Box className='scroll-submenu'>
            <List
              className={classes.listRoot}
              onClick={() => {
                setAnchorMessages(null);
              }}>
              {messages.map((item) => (
                <MessageItem key={item.id} item={item} />
              ))}
            </List>
          </Box>
          <Box mt={2}>
            <Button
              className={classes.btnPopover}
              variant='contained'
              color='primary'>
              <IntlMessages id='common.viewAll' />
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderMessages;
