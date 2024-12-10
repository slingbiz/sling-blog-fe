import React from 'react';
import {Box} from '@material-ui/core';
import {AppEnums} from 'sling-core';
const {Fonts} = AppEnums;
import {useSelector} from 'react-redux';

const dot = require('dot-object');
const _ = require('lodash');
const ListingSummary = ({widgetProps}) => {
  let {h1, h2} = widgetProps;
  const {fakeProducts} = useSelector(({ssrApi}) => ssrApi);
  const {value: rPath, default: defaultVal} =
    _.find(widgetProps, {
      type: 'response-derived',
    }) || {};

  const totalCount =
    (rPath ? dot.pick(rPath, fakeProducts) : defaultVal) || defaultVal;
  h2 = h2.value.replace(/<totalCount>/g, totalCount);
  console.log(
    rPath,
    fakeProducts,
    'rPath - fakeProudcts',
    totalCount,
    'h2',
    h2,
  );

  return (
    <Box p={4}>
      <Box component='h1' fontWeight={Fonts.BOLD} fontSize={18} mr={3}>
        {h1.value}
      </Box>
      <Box component='span'>{h2}</Box>
    </Box>
  );
};
export default ListingSummary;
