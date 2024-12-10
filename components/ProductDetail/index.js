import React, {useEffect} from 'react';
import ProductImageSlide from '../../blocks/ProductImageSlide';
import {useDispatch, useSelector} from 'react-redux';
import Header from './Header';
import HeaderCommon from '../HeaderDefault';
import ProductView from '../../blocks/ProductView';
import {GridContainer, InfoView} from 'sling-core';
import SimilarProduct from '../../blocks/SimilarProduct';
import {getProductDetail} from '../../redux/actions/Ecommerce';
import {useRouter} from 'next/router';
import {Box, Card} from '@material-ui/core';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const {currentProduct} = useSelector(({ecommerce}) => ecommerce);
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <HeaderCommon style={{position: 'sticky'}} />
      {currentProduct ? (
        <Card style={{padding: 20}}>
          <Header product={currentProduct} />
          <GridContainer>
            <ProductImageSlide product={currentProduct} />
            <ProductView product={currentProduct} />
          </GridContainer>
          <SimilarProduct />
        </Card>
      ) : null}
      <InfoView />
    </Box>
  );
};

export default ProductDetail;
