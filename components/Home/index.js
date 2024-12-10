import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {AppEnums} from 'sling-core';
import Header from '../HeaderDefault';
import FooterDefault from '../FooterDefault';
import AppLogo from '../../widgets/AppLogo';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import {ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import {grey} from '@material-ui/core/colors';
import {useSelector} from 'react-redux';

const {Fonts} = AppEnums;

const useStyles = makeStyles((theme) => ({
  p10: {padding: 10},
  imgRoot: {
    cursor: 'pointer',
    display: 'inline-block',
    width: 140,
  },
  cardRoot: {
    maxWidth: '36rem',
    minHeight: '36rem',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 20,
    [theme.breakpoints.up('xl')]: {
      paddingTop: 32,
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      width: 130,
      height: 9,
      borderBottomRightRadius: 80,
      borderBottomLeftRadius: 80,
      marginRight: 'auto',
      marginLeft: 'auto',
      backgroundColor: theme.palette.primary.main,
    },
  },
  muiTabsFull: {
    marginLeft: 0,
    marginRight: 0,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    '& .MuiTabs-flexContainer': {
      '& .MuiTab-root': {
        flex: 1,
      },
    },
  },
  muiTab: {
    fontWeight: Fonts.MEDIUM,
    fontSize: 16,
    paddingBottom: 16,
    paddingTop: 16,
    marginLeft: 8,
    marginRight: 8,
    color: theme.palette.textSecondary,
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
}));

const HomeComponent = (props) => {
  const classes = useStyles(props);

  const layoutInitial = useSelector(({layout}) => layout);
  console.log(layoutInitial, '[layoutInitial]');
  let setupInstructions = '';
  if (!Object.keys(layoutInitial?.layoutConfig || {}).length) {
    setupInstructions = (
      <code>
        {' '}
        <span>
          Note - Seems like Sling FE is not connected to any Studio account.
          Please check the API Keys and follow setup instructions,{' '}
        </span>
      </code>
    );
  }
  return (
    <>
      <Header />

      <Box
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='center'>
        <Box mb={{xs: 6, md: 8, xl: 18}} textAlign='center'>
          {/*<img*/}
          {/*  className={classes.imgRoot}*/}
          {/*  src={`${process.env.imageBasePath}/images/logo-white-with-name.png`}*/}
          {/*  alt='sling-logo'*/}
          {/*/>*/}
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'>
          <Card className={classes.cardRoot}>
            <img
              className={classes.imgRoot}
              style={{width: '100%'}}
              src={`/images/home-min.png`}
              alt='sling-logo'
            />
            <Box
              px={{xs: 6, sm: 10, xl: 15}}
              mt={5}
              display='flex'
              style={{height: '100%'}}
              flexDirection='column'
              justifyContent='center'
              alignItems='center'>
              <AppLogo />
            </Box>
            <Typography
              variant='h6'
              mt={5}
              component='h6'
              color='text.primary'
              style={{marginBottom: 15}}>
              Welcome to Home Page.
            </Typography>

            <Box
              px={{xs: 6, sm: 10, xl: 15}}
              display='flex'
              style={{height: '100%'}}
              flexDirection='column'
              justifyContent='center'
              alignItems='center'>
              {/*<AppLogo />*/}

              <Box style={{height: '100%'}}>
                <Box>
                  {!setupInstructions
                    ? setupInstructions
                    : 'Edit pages/index.js and save to reload.'}
                </Box>
                <Box className={classes.p10}>
                  <Link
                    color='inherit'
                    href='https://sling.biz/documentation'
                    target={'_blank'}>
                    Learn More
                  </Link>
                </Box>
              </Box>
              <Box
                mb={{xs: 4, xl: 10}}
                color={grey[600]}
                fontSize={16}
                fontWeight={Fonts.MEDIUM}
                style={{
                  background: '#fff',
                  boxShadow:
                    'rgb(0 0 0 / 1%) 0px 10px 10px 0px, rgb(0 0 0 / 7%) 0px 6px 10px 1px',
                  borderRadius: '8px',
                  padding: '20px',
                  margin: '20px',
                }}>
                <Typography style={{fontSize: 18}} component='div'>
                  <b>Did you know?</b>
                </Typography>

                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <IconButton />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<b>Sling Comes with default set of routes</b>}
                      secondary={
                        <Box>
                          <a
                            href='/dubai/women/clothes/products'
                            style={{textDecoration: 'none'}}>
                            <span style={{color: 'grey'}}>Try</span>
                            <span
                              style={{color: '#ff9800', fontWeight: 'bold'}}>
                              Product Listing
                            </span>
                          </a>
                        </Box>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <IconButton />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary='There are around 20+ Widgets'
                      secondary='Add a Route in Sling Studio matching this route'
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
      <Box
        style={{
          position: 'fixed',
          width: '100%',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <FooterDefault />
      </Box>
    </>
  );
};

export default HomeComponent;
