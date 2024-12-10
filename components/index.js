import {registerWidget} from 'sling-core';
import dynamic from 'next/dynamic';

// Dynamically import the FooterDefault component and register it
registerWidget(
  'Footer Default',
  dynamic(() => import('./FooterDefault'), {ssr: false}),
  {
    name: 'Footer Default', // Name of the component
    key: 'FooterDefault', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description:
      'Default Footer Component/ Edit this to customize default footer and use it on your pages.', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'perm_device_information', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

// Dynamically import the ComingSoon component and register it
registerWidget(
  'Coming Soon Component',
  dynamic(() => import('./ComingSoon'), {ssr: false}),
  {
    name: 'Coming Soon Component', // Name of the component
    key: 'ComingSoonComponent', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Use this to show Coming Soon on your new web page.', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'query_builder', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Error 500 component', // Name of the component
  dynamic(() => import('./Error500'), {ssr: false}),
  {
    key: 'Error500component', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Use this to show 500 Error section on your new web page.', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'pan_tool', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Error 404 component', // Name of the component
  dynamic(() => import('./Error404'), {ssr: false}),
  {
    key: 'Error404component', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Use this to show 404 Error section on your new web page.', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'pan_tool', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Default Sling Home Page', // Name of the component
  dynamic(() => import('./Home'), {ssr: false}),
  {
    key: 'DefaultSlingHomePage', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Edit this to make changes in the Home Page for Sling FE', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'home', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Custom Sling Error Component', // Name of the component
  dynamic(() => import('./ErrorSling'), {ssr: false}),
  {
    key: 'CustomSlingErrorComponent', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description:
      'Use this to show no routes and Error section on your new web page.', // Description of the component
    ownership: 'private', // This is a private component
    icon: '', // No icon provided
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Product Detail Page Component', // Name of the component
  dynamic(() => import('./ProductDetail'), {ssr: false}),
  {
    key: 'ProductDetailPageComponent', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Detail page wrapper for Sling FE PDP', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'add_shopping_cart', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

registerWidget(
  'Default Header Component', // Name of the component
  dynamic(() => import('./HeaderDefault'), {ssr: false}),
  {
    key: 'DefaultHeaderComponent', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description:
      'Edit this to make changes in the default Header component of Sling FE', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'line_style', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);
