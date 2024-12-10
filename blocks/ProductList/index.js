import React, {useContext} from 'react';
import {Box} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useSelector} from 'react-redux';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import PaginationControlled from '../../widgets/PaginationControlled/index';
import AppContext from '../../utils/context/AppContext';
import {VIEW_TYPE} from '../../utils/constants/AppConst';

const dot = require('dot-object');

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > div': {
      width: '100%',
    },
  },
}));

const Products = ({widgetProps}) => {
  const classes = useStyles();

  const {viewType} = useSelector(({ecommerce}) => ecommerce);
  const {isRTL, ssrApi} = useContext(AppContext);
  const {fakeProducts = {}, filterData} = ssrApi;

  const {responsePath} = widgetProps || {};
  let products = fakeProducts;
  if (responsePath?.value) {
    products = dot.pick(responsePath.value, fakeProducts);
  }

  const {sling_mapping: slingMapping = {}} = fakeProducts;
  const {loading} = useSelector(({common}) => common);
  return (
    <Box
      className={classes.root}
      flex={1}
      display='flex'
      p={2}
      height={1}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}>
      {viewType === VIEW_TYPE.GRID ? (
        <ProductGrid
          products={products}
          loading={loading}
          slingMapping={slingMapping}
        />
      ) : (
        <ProductList
          products={products}
          loading={loading}
          slingMapping={slingMapping}
        />
      )}
      <PaginationControlled />
    </Box>
  );
};

export default Products;
