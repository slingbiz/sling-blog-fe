import React from 'react';
import {Checkbox, makeStyles} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Rating from '@material-ui/lab/Rating';
import Slider from 'react-slick';
import {AppEnums, IntlMessages} from 'sling-core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {green, grey} from '@material-ui/core/colors';
import {useRouter} from 'next/router';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const {Fonts} = AppEnums;

const dot = require('dot-object');

const useStyles = makeStyles((theme) => ({
  priceView: {
    fontSize: 12,
    [theme.breakpoints.up('xl')]: {
      fontSize: 14,
    },
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
  textSm: {
    fontSize: 14,
  },
  textXs: {
    fontSize: 12,
  },
  checkBoxRoot: {
    '& .MuiCheckbox-root': {
      padding: 3,
    },
  },
  truncate: {},
  listImage: {
    maxHeight: 190,
    height: 190,
    overflow: 'hidden',
    objectFit: 'contain',
    objectPosition: '50% 50%',
    verticalAlign: 'middle',
  },
  titleTruncate: {
    lineClamp: 1,
  },
  btn: {
    fontWeight: Fonts.MEDIUM,
    padding: '4px 12px',
    fontSize: 12,
  },
  descpMargin: {
    marginBottom: 10,
  },
}));

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListItem = (props) => {
  const {item, slingMapping} = props;
  console.log(slingMapping, 'slingMappingslingMappingslingMappingslingMapping');
  // const dispatch = useDispatch();
  const router = useRouter();

  const getValue = (key) => {
    return slingMapping[key] ? dot.pick(slingMapping[key], item) : item[key];
  };

  const classes = useStyles(props);
  return (
    <Grid
      container
      spacing={4}
      justifyContent={'space-between'}
      p={5}
      m={2}
      className='pointer item-hover'
      onClick={() => {
        // dispatch(setCurrentProduct(item));
        router.push('/product/detail/' + item.id);
      }}
      clone>
      <Grid item xs={3}>
        <Box pr={{xs: 0, sm: 4}} mb={{xs: 3, sm: 0}}>
          {typeof item?.image == 'object' ? (
            <Slider {...settings}>
              {item?.image?.map((img) => {
                return (
                  <Box sm={2} key={img.id}>
                    <img
                      className={classes.listImage}
                      src={getValue('image') || ''}
                      alt='watch'
                    />
                  </Box>
                );
              })}
            </Slider>
          ) : (
            <Box mb={2}>
              <img className={classes.listImage} src={item.image} alt='watch' />
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box display='flex' flexDirection={'column'} mb={1}>
          <Box display='flex' alignItems='center' mb={1}>
            <Box
              mb={1}
              color='text.primary'
              fontWeight={Fonts.BOLD}
              fontSize={16}
              component='h4'
              className={clsx(classes.truncate, classes.titleTruncate)}>
              {getValue('title')}
            </Box>

            <Box
              component='span'
              className={classes.checkBoxRoot}
              ml='auto'
              display='block'
              textAlign='right'>
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteOutlinedIcon />}
              />
            </Box>
          </Box>

          <Typography
            component='h6'
            color='textSecondary'
            className={clsx(
              classes.truncate,
              classes.textSm,
              classes.descpMargin,
            )}>
            {getValue('description')}
          </Typography>

          <Box
            mb={{xs: 2, xl: 5}}
            display='flex'
            flexWrap='wrap'
            className={classes.priceView}>
            <Box
              mr={{xs: 2, xl: 4}}
              mb={1}
              pr={{xs: 2, xl: 4}}
              borderRight={1}
              borderColor={grey[200]}>
              <Box
                component='span'
                color='grey.600'
                fontWeight={Fonts.MEDIUM}
                className={classes.textUppercase}>
                <IntlMessages id='ecommerce.exclusivePrice' />:
              </Box>
              <Box component='span' ml={2} fontWeight={Fonts.MEDIUM}>
                ${getValue('original_price')}
              </Box>
            </Box>
            {getValue('discounted_price') ? (
              <>
                <Box
                  mr={{xs: 2, xl: 4}}
                  mb={1}
                  pr={{xs: 2, xl: 4}}
                  color='textSecondary'
                  borderRight={1}
                  borderColor='primary.main'>
                  <IntlMessages id='ecommerce.mrp' />:
                  <Box component='span' className={classes.lineThrough}>
                    ${getValue('discounted_price')}
                  </Box>
                </Box>
                <Box mb={1} fontWeight={Fonts.MEDIUM} color={green[600]}>
                  {getValue('original_price') -
                    (getValue('discounted_price') /
                      getValue('original_price')) *
                      100}
                  <IntlMessages id='ecommerce.off' />
                </Box>
              </>
            ) : (
              ''
            )}
          </Box>

          <Box
            pt={{xl: 4}}
            mx={{xs: -2, xl: -3}}
            display='flex'
            flexWrap='wrap'
            justifyContent='space-between'
            alignItems='center'>
            <Box
              px={{xs: 2, xl: 3}}
              mb={2}
              display={{xs: 'none', xl: 'flex'}}
              alignItems='center'>
              <Box ml={-3} mr={1}>
                <Checkbox />
              </Box>
              <Box component='span' className={classes.textSm}>
                <IntlMessages id='ecommerce.addToCompare' />
              </Box>
            </Box>
            <Box px={{xs: 2, xl: 3}} mb={2} display='flex' alignItems='center'>
              <Rating size='small' value={getValue('rating_count')} readOnly />
              <Box ml={2}>{`(${item.rating?.count})`}</Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
