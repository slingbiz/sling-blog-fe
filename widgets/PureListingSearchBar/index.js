import React from 'react';
import AppSearch from '../SearchBar';

const PureListingSearchBar = ({onSearch}) => {
  return (
    <AppSearch
      placeholder='Search'
      onChange={(e) =>
        onSearch
          ? onSearch(e.target.value)
          : console.log(
              'Please add a search function for PureListingSearchBar widget.',
            )
      }
    />
  );
};

export default PureListingSearchBar;
