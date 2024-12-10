import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles, alpha} from '@material-ui/core/styles'; // Replaced fade with alpha
import {Box} from '@material-ui/core';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import {AppEnums} from 'sling-core';
const {Fonts} = AppEnums;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    marginRight: 10,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginRight: 20,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: (props) => ({
    position: 'relative',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15), // Replaced fade with alpha
    marginLeft: props.align === 'right' ? 'auto' : 0,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25), // Replaced fade with alpha
    },
    '&.cr-search': {
      [theme.breakpoints.down('sm')]: {
        // position: 'absolute',
        // right: 0,
        // top: '50%',
        // zIndex: 1,
        // transform: 'translateY(-50%)',
      },
    },
  }),
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.right': {
      left: 'auto',
      right: 0,
      '& + $inputRoot $inputInput': {
        paddingLeft: theme.spacing(2),
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      },
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    backgroundColor: theme.palette.common.white,
    width: '100%',
    height: 35,
    borderRadius: 4,
    boxSizing: 'border-box',
    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderColor: theme.palette.primary,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: theme.palette.common.white,
        // width: 162,
      },
    },
  },
  inputBase: {
    backgroundColor: 'transparent',
    fontWeight: Fonts.MEDIUM,
    border: '1px solid',
    borderColor: (props) =>
      props.borderLight ? '#efefef' : theme.palette.textSecondary,
    color: 'black',
    borderRadius: 4,

    '& > .Mui-focused': {
      borderColor: 'red',
    },
  },
  searchIconBox: {
    position: 'relative',
    '& $inputInput': {
      width: 35,
      borderRadius: 50,
      paddingLeft: 27,
      '&:focus': {
        width: '100%',
        borderRadius: 4,
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      },
    },
    '& $searchIcon': {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
}));

const AppSearch = ({
  placeholder,
  iconPosition,
  align,
  overlap,
  borderLight,
  onlyIcon,
  containerStyle,
  iconStyle,
  ...rest
}) => {
  const classes = useStyles({borderLight, align});
  return (
    <Box className={classes.root} style={containerStyle}>
      <Box
        className={clsx(
          classes.search,
          {'cr-search': overlap},
          onlyIcon ? classes.searchIconBox : null,
        )}>
        <Box
          className={clsx(classes.searchIcon, {
            right: iconPosition === 'right',
          })}
          style={iconStyle}>
          <SearchIcon />
        </Box>
        <InputBase
          {...rest}
          placeholder={placeholder || 'Search…'}
          className={clsx(classes.inputBase, 'crAppsSearch')}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{'aria-label': 'search'}}
        />
      </Box>
    </Box>
  );
};

export default AppSearch;
