import {registerWidget} from 'sling-core';
import dynamic from 'next/dynamic';

registerWidget(
  'Default Header User', // Name of the block
  dynamic(() => import('./HeaderUser'), {ssr: false}),
  {
    key: 'DefaultHeaderUser', // Key used for identifying the block
    description: 'header user', // Description of the block
    ownership: 'private', // This is a private block
    type: 'block', // Type is block
    icon: 'account_box', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'Listing Summary Top Bar', // Name of the block
  dynamic(() => import('./ListingSummary'), {ssr: false}),
  {
    key: 'ListingSummaryTopBar', // Key used for identifying the block
    type: 'block',
    description: 'Summary of total count and current page. h1 & h2 values.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'picture_in_picture_alt', // Icon representing the block
    props: [
      {
        name: 'totalCount',
        propType: 'response-derived', // Derived from API response
        dataType: 'string', // Data type is string
        default: '341', // Default value
      },
      {
        name: 'h1',
        propType: 'static', // Static prop type
        dataType: 'string', // Data type is string
        default: '', // Default value
      },
      {
        name: 'h2',
        propType: 'static-derived', // Derived from static value
        dataType: 'string', // Data type is string
        default: '', // Default value
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['totalCount', 'h1', 'h2'], // Required props for the block
  },
);

registerWidget(
  'Product Image Slider',
  dynamic(() => import('./ProductImageSlide'), {ssr: false}),
  {
    key: 'ProductImageSlider',
    type: 'block',
    description:
      'List of images for displaying detailed information of the product.',
    ownership: 'private',
    icon: 'camera_enhance',
    props: [],
    availableToAllPages: true,
    config: {},
    requiredProps: [],
  },
);

registerWidget(
  'Product View', // Name of the block
  dynamic(() => import('./ProductView'), {ssr: false}),
  {
    key: 'ProductView', // Key used for identifying the block
    type: 'block',
    description: 'PDP - Detail level information for a product.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'shopping_basket', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'Similar Product List', // Name of the block
  dynamic(() => import('./SimilarProduct'), {ssr: false}),
  {
    key: 'SimilarProductList', // Key used for identifying the block
    type: 'block',
    description: 'Shows Similar Product List, Used on the PDP page.', // Description of the block
    ownership: 'private', // This is a private block
    icon: '', // No icon provided
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'White Logo', // Name of the block
  dynamic(() => import('./AppLogoWhite'), {ssr: false}),
  {
    key: 'WhiteLogo', // Key used for identifying the block
    type: 'block',
    description:
      'Wrapper component which displays White version of the logo & name', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'rounded_corner', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'Shows User Info', // Name of the block
  dynamic(() => import('./UserInfo'), {ssr: false}),
  {
    key: 'UserInfo', // Key used for identifying the block
    type: 'block',
    description: 'React Block to display User info.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'verified_user', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'Filter Toggle for Mobile devices', // Name of the block
  dynamic(() => import('./FilterToggle'), {ssr: false}),
  {
    key: 'FilterToggle', // Key used for identifying the block
    type: 'block',
    description: 'h1 value to be shown on mobile.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'account_balance', // Icon representing the block
    props: [
      {
        name: 'h1',
        propType: 'static', // Static prop type
        dataType: 'string', // Data type is string
        default: 'default h1', // Default value for the prop
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['h1'], // Required props for the block
  },
);

registerWidget(
  'Product Filters', // Name of the block
  dynamic(() => import('./ProductFilters'), {ssr: false}),
  {
    key: 'ProductFilters', // Key used for identifying the block
    description:
      'Select Filters and calls updateFilters which triggers Fetch products call.', // Description of the block
    ownership: 'private', // This is a private block
    type: 'block', // Type is block
    icon: 'face', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

registerWidget(
  'Shows Product List', // Name of the block
  dynamic(() => import('./ProductList'), {ssr: false}),
  {
    key: 'ProductList', // Key used for identifying the block
    description: 'Takes product array path from the Api response.', // Description of the block
    ownership: 'private', // This is a private block
    type: 'block', // Type is block
    icon: 'account_balance_wallet', // Icon representing the block
    props: [
      {
        name: 'responsePath',
        propType: 'response-derived', // Derived from API response
        dataType: 'string', // Data type is string
        default: 'data', // Default value for the prop
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['responsePath'], // Required props for the block
  },
);

registerWidget(
  'Listing Search Bar', // Name of the block
  dynamic(() => import('./ListingSearchBar'), {ssr: false}),
  {
    key: 'ListingSearchBar', // Key used for identifying the block
    description: 'Search Bar Wrapper - accepts List or Grid option',
    ownership: 'private', // This is a private block
    type: 'block', // Type is block
    icon: 'settings_cell', // Icon representing the block
    props: [
      {
        name: 'viewType',
        propType: 'static', // Static prop type
        dataType: 'option', // Option type for the data
        options: [
          {value: 1, label: 'List'},
          {value: 2, label: 'Grid'},
        ],
        default: 2, // Default is 'Grid'
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['viewType'], // Required props for the block
  },
);
