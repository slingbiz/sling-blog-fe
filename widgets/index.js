import {registerWidget} from 'sling-core';
import dynamic from 'next/dynamic';

registerWidget(
  'BlogDetailFooter',
  dynamic(() => import('./BlogDetailFooter'), {ssr: false}),
  {
    description: 'Display blog details.',
    ownership: 'private',
    type: 'widget',
    key: 'BlogDetailFooter',
    icon: 'Widgets', // Using the provided icon
    props: [],
  },
);

registerWidget(
  'Blog Detail Body',
  dynamic(() => import('./BlogDetailBody'), {ssr: false}),
  {
    description: 'Display blog details.',
    ownership: 'private',
    type: 'widget',
    key: 'BlogDetailBody',
    icon: 'Widgets', // Using the provided icon
    props: [
      {
        name: 'blogContent',
        propType: 'static', // Derived from API response
        dataType: 'string', // Data type is string
        default: '', // Default value
      },
    ],
  },
);

registerWidget(
  'Sub Header for Detail Page',
  dynamic(() => import('./SubHeaderPageDetail'), {ssr: false}),
  {
    description: 'Sub Header for Detail Page',
    ownership: 'private',
    type: 'widget',
    key: 'SubHeaderPageDetail',
    icon: 'Widgets', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'List of all blogs',
  dynamic(() => import('./BlogsList'), {ssr: false}),
  {
    description: 'Fetch and Display list of all blogs.',
    ownership: 'private',
    type: 'widget',
    key: 'BlogsList',
    icon: 'Widgets', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Hero Banner',
  dynamic(() => import('./HeroBanner'), {ssr: false}),
  {
    description: 'Display hero banner on home page.',
    ownership: 'private',
    type: 'widget',
    key: 'HeroBanner',
    icon: 'Widgets', // Using the provided icon
    props: [], // Add any props if necessary
  },
);
registerWidget(
  'Left Side bar for Categories',
  dynamic(() => import('./CategoriesLeftBar'), {ssr: false}),
  {
    description: 'Fetch and Display all categories.',
    ownership: 'private',
    type: 'widget',
    key: 'CategoriesLeftBar',
    icon: 'Widgets', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Header for Sling Blog Page',
  dynamic(() => import('./HeaderBlog'), {ssr: false}),
  {
    description: 'Common Header for Sling Blogs',
    ownership: 'private',
    type: 'widget',
    key: 'HeaderBlog',
    icon: 'settings_ethernet', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Pagination Widget',
  dynamic(() => import('./PaginationControlled'), {ssr: false}),
  {
    description:
      'Modify props to make pagination style controlled by the Sling Studio.',
    ownership: 'private',
    type: 'widget',
    key: 'PaginationControlled',
    icon: 'settings_ethernet', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Widget to Display Bread Crumbs',
  dynamic(() => import('./BreadCrumbsDefault'), {ssr: false}),
  {
    description: 'Edit 2 this to change logo for your company and name',
    ownership: 'private',
    type: 'widget',
    key: 'BreadCrumbsDefault',
    icon: 'Widgets',
    props: [],
  },
);

registerWidget(
  'Custom Search Bar Widget',
  dynamic(() => import('./SearchBar'), {ssr: false}),
  {
    description: 'Search Widget.',
    ownership: 'private',
    type: 'widget',
    key: 'SearchBar',
    icon: 'search',
    props: [],
  },
);

// Register the PureListingSearchBar widget
registerWidget(
  'Search Bar Widget',
  dynamic(() => import('./PureListingSearchBar'), {ssr: false}),
  {
    description: 'Pure Search Widget.',
    ownership: 'private',
    type: 'widget',
    key: 'PureListingSearchBar',
    icon: 'search', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

// Register the Notifications widget
registerWidget(
  'Notification Widget',
  dynamic(() => import('./Notifications'), {ssr: false}),
  {
    description: 'Modify props to make notifications dynamic.',
    ownership: 'private',
    type: 'widget',
    key: 'NotificationWidget',
    icon: '', // Add icon path or leave empty
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Widget to notifications on Header',
  dynamic(() => import('./HeaderMessages'), {ssr: false}),
  {
    description: 'This widget is used to display messages in the header.',
    ownership: 'private',
    type: 'widget',
    key: 'HeaderMessages',
    icon: 'Widgets',
    props: [],
  },
);

registerWidget(
  'AppLogo',
  dynamic(() => import('./AppLogo'), {ssr: false}),
  {
    description: 'Edit 2 this to change logo for your company and name',
    ownership: 'private',
    type: 'widget',
    key: 'AppLogo',
    icon: 'Widgets',
    props: [],
  },
);
