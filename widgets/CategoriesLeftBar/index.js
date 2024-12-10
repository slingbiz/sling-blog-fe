import React, {useState, useEffect} from 'react';
import {Box, Typography, TextField} from '@material-ui/core';

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
  const [categories, setCategories] = useState(categoriesInit);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    setCategories(
      categoriesInit.filter((category) =>
        category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);

  return (
    <Box
      style={{
        width: '100%',
        padding: '16px',
        // backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
      {/* Search Bar */}
      <Typography
        variant='h6'
        style={{marginBottom: '16px', fontWeight: 'bold'}}>
        {/* Categories */}
      </Typography>
      <TextField
        label='Search Categories'
        // variant='outlined'
        value={search}
        onChange={handleSearchChange}
        fullWidth
        style={{
          marginBottom: '16px',
          backgroundColor: '#fff',
          padding: '10px 10px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* Categories List */}
      {categories.map((category, index) => (
        <Typography
          key={index}
          style={{
            marginBottom: '8px',
            paddingLeft: '10px',
            fontSize: '16px',
            borderLeft: '4px solid green', // Border on the left
            transition: '0.3s', // Smooth transition for hover effect
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              borderLeft: '4px solid #6200ea', // Highlight border color on hover
            },
          }}>
          {category}
        </Typography>
      ))}
    </Box>
  );
};

export default LeftWidget;
