import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import {AppEnums} from 'sling-core';
const {Fonts} = AppEnums;
import {makeStyles} from '@material-ui/core';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  InstapaperShareButton,
} from 'react-share';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingBottom: theme.spacing(5),
    borderBottom: '1px solid #E5E4EA',
    marginBottom: 20,
    // alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  socialButtons: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
  },
}));
const Header = ({product}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box flex={1}>
        <Box
          component='h3'
          color='text.primary'
          fontWeight={Fonts.BOLD}
          fontSize={16}
          mb={1}>
          {product.title}
        </Box>
        <Box display='flex'>
          <Rating defaultValue={product.rating} size='small' readOnly />
          <Box ml={2} mr={4} color='textSecondary'>
            {product.reviews + ' reviews'}
          </Box>

          <Box>
            SKU :{' '}
            <Box component='span' ml={2} color='textSecondary'>
              MB023
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.socialButtons}>
        <LinkedinShareButton
          url={'https://www.linkedin.com/company/sling-biz'}
          style={{marginRight: 10}}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={'https://www.linkedin.com/company/sling-biz'}
          style={{marginRight: 10}}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <InstapaperShareButton url={'https://www.instagram.com/sling.biz/'}>
          <TwitterIcon size={32} round={true} />
        </InstapaperShareButton>
      </Box>
    </Box>
  );
};

export default Header;
