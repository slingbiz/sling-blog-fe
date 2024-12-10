import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';

const FooterDefault = (props) => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 99,
      margin: '0',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '& .footerContainer': {
        padding: '5px 20px',
        [theme.breakpoints.up('md')]: {
          paddingLeft: 32,
          paddingRight: 32,
        },
        [theme.breakpoints.up('xl')]: {
          padding: '10px 32px',
        },
      },
    },
    btnRoot: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  }));

  const classes = useStyles(props);

  return (
    <>
      <Box className={clsx(classes.footer, 'footer')}>
        <Box
          className='footerContainer'
          alignItems='center'
          flexDirection='row'
          justifyContent='center'
          display='flex'>
          <Box>
            © {new Date().getFullYear()} Brewed Passionately in Dubai. All
            Rights Reserved.
          </Box>
          {/*<Box ml='auto'>*/}
          {/*  <Button className={classes.btnRoot} color='primary'>*/}
          {/*    More*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Box>
      </Box>
    </>
  );
};

export default FooterDefault;
