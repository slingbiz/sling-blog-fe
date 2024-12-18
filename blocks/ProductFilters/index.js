import React, {useContext, useEffect, useState} from 'react';
import ProductsCategory from './ProductsCategory';
import {Box} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PriceSelector from './PriceSelector';
import {makeStyles} from '@material-ui/core/styles';
import CheckedCell from './CheckedCell';
import ColorCell from './ColorCell';
import RatingCell from './RatingCell';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../../redux/actions/Ecommerce';
import AppContext from '../../utils/context/AppContext';
import AppEnums from '../../utils/constants/AppEnums';
import AppSidebar from './AppSidebar';
import {
  BrandData,
  DiscountList,
  IdealFor,
  ProductColors,
} from '../../utils/services/db/ecommerce/ecommerceData';

const {Fonts} = AppEnums;

const useStyles = makeStyles({
  divider: {
    marginTop: 16,
  },
});

const ProductSidebar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {filterData} = useSelector(({ecommerce}) => ecommerce);
  const {footer, navStyle} = useContext(AppContext);

  const {isAppDrawerOpen} = useSelector(({common}) => common);
  const [selectedBrand, setSelectedBrand] = useState(filterData.brand);
  const [selectedFor, setSelectedFor] = useState(filterData.ideaFor);
  const [selectedDiscount, setSelectedDiscount] = useState(filterData.discount);
  const [selectedColor, setSelectedColor] = useState(filterData.color);
  const [customerRating, setCustomerRating] = useState(filterData.rating);

  useEffect(() => {
    dispatch(
      setFilters({
        title: filterData.title,
        brand: selectedBrand,
        ideaFor: selectedFor,
        discount: selectedDiscount,
        color: selectedColor,
        rating: customerRating,
      }),
    );
  }, [
    dispatch,
    filterData.title,
    selectedBrand,
    selectedFor,
    selectedDiscount,
    selectedColor,
    customerRating,
  ]);

  const onSelectBrand = (brandId) => {
    if (selectedBrand.some((brand) => brand === brandId)) {
      setSelectedBrand(selectedBrand.filter((brand) => brand !== brandId));
    } else {
      setSelectedBrand(selectedBrand.concat(brandId));
    }
  };

  const onSelectFor = (id) => {
    if (selectedFor.some((item) => item === id)) {
      setSelectedFor(selectedFor.filter((item) => item !== id));
    } else {
      setSelectedFor(selectedFor.concat(id));
    }
  };

  const onSelectDiscount = (id) => {
    if (selectedDiscount.some((item) => item === id)) {
      setSelectedDiscount(selectedDiscount.filter((item) => item !== id));
    } else {
      setSelectedDiscount(selectedDiscount.concat(id));
    }
  };

  const onSelectColor = (id) => {
    if (selectedColor.some((item) => item === id)) {
      setSelectedColor(selectedColor.filter((item) => item !== id));
    } else {
      setSelectedColor(selectedColor.concat(id));
    }
  };

  const onSelectRating = (id) => {
    if (customerRating.some((item) => item === id)) {
      setCustomerRating(customerRating.filter((item) => item !== id));
    } else {
      setCustomerRating(customerRating.concat(id));
    }
  };

  return (
    <AppSidebar
      isAppDrawerOpen={isAppDrawerOpen}
      footer={footer}
      navStyle={navStyle}>
      <Box style={{padding: 20}}>
        <Box component='h5' mb={2} fontWeight={Fonts.MEDIUM}>
          Filter By
        </Box>
        <Box mb={4} fontWeight={Fonts.MEDIUM}>
          CATEGORIES
        </Box>
        <ProductsCategory />
        <Divider className={classes.divider} />

        <Box my={4} fontWeight={Fonts.MEDIUM}>
          PRICE
        </Box>
        <PriceSelector />
        <Divider className={classes.divider} />

        {/* Brand Filter */}
        <Box my={4} fontWeight={Fonts.MEDIUM}>
          BRAND
          {BrandData.map((data) => (
            <CheckedCell
              key={data.id}
              data={data}
              onChange={onSelectBrand}
              selected={selectedBrand}
            />
          ))}
        </Box>
        <Divider className={classes.divider} />

        {/* Ideal For Filter */}
        <Box my={4} fontWeight={Fonts.MEDIUM}>
          IDEAL FOR
          {IdealFor.map((data) => (
            <CheckedCell
              key={data.id}
              data={data}
              onChange={onSelectFor}
              selected={selectedFor}
            />
          ))}
        </Box>
        <Divider className={classes.divider} />

        {/* Discount Filter */}
        <Box my={4} fontWeight={Fonts.MEDIUM}>
          DISCOUNT
          {DiscountList.map((data) => (
            <CheckedCell
              key={data.id}
              data={data}
              onChange={onSelectDiscount}
              selected={selectedDiscount}
            />
          ))}
        </Box>
        <Divider className={classes.divider} />

        {/* Color Filter */}
        <Box my={4} fontWeight={Fonts.MEDIUM}>
          COLOR
          <Box style={{display: 'flex'}}>
            {Object.values(ProductColors).map((data, index) => (
              <ColorCell
                key={'color-' + index}
                data={data}
                selected={selectedColor}
                onChange={onSelectColor}
              />
            ))}
          </Box>
        </Box>
        <Divider className={classes.divider} />

        {/* Rating Filter */}
        <Box my={4} fontWeight={Fonts.MEDIUM}>
          CUSTOMER RATINGS
          {[5, 4, 3, 2, 1].map((data) => (
            <RatingCell
              key={data}
              data={data}
              onChange={onSelectRating}
              selected={customerRating}
            />
          ))}
        </Box>
      </Box>
    </AppSidebar>
  );
};

export default ProductSidebar;
