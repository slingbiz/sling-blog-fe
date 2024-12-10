import React, {useContext} from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AppContext from '../../utils/context/AppContext';
import AppEnums from '../../utils/constants/AppEnums';
const {ThemeMode} = AppEnums;
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';

const AppLogo = () => {
  const {themeMode} = useContext(AppContext);
  const useStyles = makeStyles(() => ({
    logoRoot: {
      display: 'flex',
      flexDirection: 'row',
      cursor: 'pointer',
      alignItems: 'center',
    },
    logo: {
      height: 36,
      // marginRight: 10,
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.logoRoot}>
      <Hidden smUp>
        <img
          className={classes.logo}
          src={`/images/logo.png`}
          alt='sling-logo'
        />
      </Hidden>
      <Hidden xsDown>
        <Link href='/' legacyBehavior>
          <img
            className={classes.logo}
            src={`/images/logo.png`}
            alt='Sling Frontend Demo'
          />
        </Link>
      </Hidden>
      <Box
        color='textSecondary'
        fontSize={16}
        fontWeight={500}
        ml={2}
        mt={4}
        mb={3}>
        Demo
      </Box>
    </Box>
  );
};

export default AppLogo;
