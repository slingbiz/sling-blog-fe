import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import ListItem from './ListItem';

const useStyles = makeStyles((theme) => ({
  cPoint: {cursor: 'pointer'},
}));

const ProductList = ({products, slingMapping}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} justifyContent={'center'}>
      {products?.map((item, k) => {
        return (
          <Grid item xs={12} key={'item-' + k} className={clsx(classes.cPoint)}>
            <ListItem item={item} key={item.id} slingMapping={slingMapping} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ProductList;
