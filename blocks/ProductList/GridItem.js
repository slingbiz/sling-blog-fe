import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import {Checkbox, makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {green} from '@material-ui/core/colors';
import clsx from 'clsx';
import {useRouter} from 'next/router';

import {IntlMessages, AppEnums} from 'sling-core';
const {Fonts} = AppEnums;
import Typography from '@material-ui/core/Typography';
const dot = require('dot-object');

const useStyles = makeStyles((theme) => ({
  textUppercase: {
    textTransform: 'uppercase',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
  textBase: {
    fontSize: 16,
  },
  textSm: {
    fontSize: 14,
  },
  posAbs: {
    position: 'absolute',
  },
  flr: {right: 0},
  posRel: {position: 'relative'},
  textXs: {
    fontSize: 12,
  },
  textRes: {
    fontSize: 12,
    [theme.breakpoints.up('xl')]: {
      fontSize: 14,
    },
  },
  truncate: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
    display: 'box',
    lineClamp: 3,
    boxOrient: 'vertical',
    overflow: 'hidden',
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
  itemImg: {
    width: '100%',
    maxHeight: '220px !important',
    height: 220,
    overflow: 'hidden',
    objectFit: 'contain',
    objectPosition: '50% 50%',
    verticalAlign: 'middle',
  },
}));

const GridItem = (props) => {
  const {item, slingMapping} = props;
  const router = useRouter();

  const getValue = (key) => {
    return slingMapping[key] ? dot.pick(slingMapping[key], item) : item[key];
  };

  const classes = useStyles(props);
  return (
    <Box
      p={5}
      m={2}
      className='pointer item-hover'
      onClick={() => {
        router.push('/product/detail/' + item.id);
      }}>
      <Box style={{display: 'flex', flexDirection: 'column'}}>
        <Box
          mt={2}
          mb={5}
          display='flex'
          justifyContent='space-between'
          className={classes.posRel}>
          <img
            className={classes.itemImg}
            src={getValue('image') || ''}
            alt='watch'
          />
          <Box
            component='span'
            maxHeight={28}
            width={48}
            color='primary.contrastText'
            bgcolor={green[500]}
            py={1}
            px={2}
            display='flex'
            justifyContent='center'
            alignItems='center'
            fontWeight={Fonts.MEDIUM}
            borderRadius={8}
            className={clsx(classes.textSm, classes.posAbs)}>
            {getValue('rating_count')}

            <Box component='span' ml={1}>
              <StarBorderIcon className={classes.textBase} />
            </Box>
          </Box>

          <Box mt={-3} className={clsx(classes.posAbs, classes.flr)}>
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteOutlinedIcon />}
            />
          </Box>
        </Box>

        <Box
          mb={1}
          color='text.primary'
          fontWeight={Fonts.BOLD}
          fontSize={16}
          component='h4'
          className={clsx(classes.truncate, classes.titleTruncate)}>
          {item.title}
          {getValue('title')}
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
          mx={-1}
          display='flex'
          // flexWrap='wrap'
          alignItems='center'
          fontWeight={Fonts.MEDIUM}
          justifyContent='space-between'
          className={classes.textRes}>
          <Box px={1} mb={2} component='span' color='text.primary'>
            ${getValue('original_price')}
          </Box>
          {getValue('discounted_price') ? (
            <>
              <Box
                px={1}
                mb={2}
                component='span'
                color='text.disabled'
                className={classes.lineThrough}>
                ${getValue('discounted_price')}
              </Box>
              <Box px={1} mb={2} component='span' color={green[500]}>
                {getValue('original_price') -
                  (getValue('discounted_price') / getValue('original_price')) *
                    100}
                % <IntlMessages id='ecommerce.off' />
              </Box>
            </>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
