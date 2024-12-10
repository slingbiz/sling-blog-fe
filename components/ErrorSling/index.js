import React from 'react';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import {AppEnums, IntlMessages} from 'sling-core';

import AppLogo from '../../widgets/AppLogo';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

const {Fonts} = AppEnums;

const useStyles = makeStyles(() => {
  return {
    button: {
      fontWeight: Fonts.BOLD,
      marginTop: '10px',
      fontSize: 16,
      textTransform: 'capitalize',
    },
    image: {
      width: '100%',
      marginBottom: '30px',
    },
  };
});

const ErrorSling = () => {
  const router = useRouter();

  const onGoBackToHome = () => {
    router.push('/home');
  };

  const classes = useStyles();

  return (
    <Box>
      <Box
        py={{xl: 8}}
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'>
        <Box
          mb={{xs: 4, xl: 8}}
          mt={10}
          maxWidth={{xs: 200, sm: 300, xl: 624}}
          width='100%'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            className={classes.image}
            src={'/images/errorPageImages/500.png'}
            alt='500'
          />
          <AppLogo />
        </Box>
        <Box mb={{xs: 4, xl: 5}}>
          <Box
            variant='h3'
            mb={{xs: 3, xl: 10}}
            fontSize={{xs: 20, md: 24}}
            fontWeight={Fonts.BOLD}>
            Missing Sling Route.
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
              padding: '30px',
              margin: '20px',
            }}>
            <Typography style={{fontSize: 18}}>
              <b>Possible Issues</b>
            </Typography>

            <List
              sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <IconButton />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Missing Sling Api Keys'
                  secondary='Please check - CLIENT_KEY_SECRET & CLIENT_ID'
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <IconButton />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Missing Sling Route'
                  secondary='Add a Route in Sling Studio matching this route'
                />
              </ListItem>
            </List>
          </Box>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => onGoBackToHome()}>
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorSling;
