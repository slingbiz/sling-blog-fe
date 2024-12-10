import React, {useState} from 'react';
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Button, Checkbox, makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    '& .BrainhubCarousel__container': {
      marginLeft: 10,
      borderRadius: 10,
      maxWidth: 450,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 300,
        marginBottom: 20,
      },
      '& .BrainhubCarousel': {
        height: '100%',
      },
    },
    '& .BrainhubCarousel__dots': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& .BrainhubCarousel__thumbnail': {
        opacity: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginBottom: 10,
        border: '1px solid #A0A5B9',
        '&.BrainhubCarousel__thumbnail--selected': {
          border: 'solid 2px #7c7c7c',
        },
      },
      flexDirection: 'column',
      '& img': {
        height: 80,
      },
    },
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
}));

const ProductImageSlide = ({product}) => {
  if (!product?.image) {
    return null;
  }

  const [value, setValue] = useState(0);
  const router = useRouter();
  const slides = product.image.map((data, index) => (
    <img key={index} src={data.src} alt={`Product Image ${index}`} />
  ));

  const onChange = (value) => {
    setValue(value);
  };

  const classes = useStyles();

  const onAddToCart = () => {
    // dispatch(addItemToCart(product));
  };

  const onBuyNowToCart = () => {
    onAddToCart();
    router.push('/ecommerce/cart');
  };

  return (
    <Grid item sm={12} md={4}>
      <Box className={classes.root}>
        <Dots
          position='left'
          thumbnails={slides}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
        <Carousel
          position='left'
          value={value}
          slides={slides}
          onChange={onChange}
        />

        <Box className={classes.favoriteButton}>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteOutlinedIcon />}
          />
        </Box>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        pl={{xs: 0, md: 5, lg: 5, xl: 15}}>
        <Button
          variant='contained'
          color='primary'
          onClick={onAddToCart}
          style={{marginRight: 20, width: 140}}>
          Add to cart
        </Button>
        <Button
          style={{width: 140}}
          variant='contained'
          color='secondary'
          onClick={onBuyNowToCart}>
          Buy now
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductImageSlide;
