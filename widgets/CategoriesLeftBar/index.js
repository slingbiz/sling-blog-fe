import React, {useState, useEffect, useContext} from 'react';
import {Box, Typography, TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import AppContext from '../../utils/context/AppContext';
// Sample categories
const categoriesInit = [
  'JavaScript',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'TypeScript',
  'Java',
  'Python',
  'Vue.js',
  'PHP',
];

const LeftWidget = () => {
  const [categories, setCategories] = useState([]);
  const [initCategories, setInitCategories] = useState([]); // To be moved to Context
  const [search, setSearch] = useState('');
  const {setSelectedCategory, selectedCategory} = useContext(AppContext);

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (!value) {
      setCategories(initCategories);
      return;
    }
    setCategories(
      categories.filter(({name, slug, id}) =>
        name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    //Fetch categories using an API call.
    const fetchCategories = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/categories`,
      );
      const {data} = (await response.json()) || {};
      setCategories(data);
      setInitCategories(data);
    };

    fetchCategories();
    setCategories(categoriesInit);
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        padding: '16px',
        borderRadius: '10px',
      }}>
      <TextField
        value={search}
        onChange={handleSearchChange}
        fullWidth
        style={{
          marginBottom: '16px',
          marginTop: '8px',
          backgroundColor: '#fff',
          padding: '10px 10px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon style={{color: '#999'}} />
            </InputAdornment>
          ),
          style: {
            paddingLeft: '10px',
            fontSize: '16px',
          },
        }}
        InputLabelProps={{
          style: {
            paddingLeft: '10px',
          },
        }}
        placeholder='Search Categories'
      />

      {/* Categories List */}
      {categories.map(({name, slug, id}, index) => (
        <Typography
          key={index}
          onClick={() => handleCategoryClick(name)} // Handle category click
          style={{
            // marginBottom: '8px',
            padding: '10px 15px',

            fontSize: '16px',
            backgroundColor: selectedCategory === name ? '#a29f9b21' : '',
            borderLeft:
              selectedCategory === name
                ? '4px solid rgb(255 152 0)'
                : '1px solid rgb(255 152 0)',
            cursor: 'pointer',
            transition: '0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}>
          {name}
        </Typography>
      ))}
    </Box>
  );
};

export default LeftWidget;
