import React, {useState, useContext, useEffect} from 'react';
import {Grid, Box, Typography, CircularProgress} from '@material-ui/core';
import AppContext from '../../utils/context/AppContext';

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading
  const {selectedCategory} = useContext(AppContext) || '';

  // Default image in case the blog does not have an image
  const defaultImage = '/images/blog-default.png'; // Update this path to your local default image

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Start loading when the fetch is initiated
      let fetchURL = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?sort[createdAt]=desc`;
      if (selectedCategory && selectedCategory !== 'all') {
        fetchURL = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?filters[categories][name][$eq]=${selectedCategory}&sort[createdAt]=desc`;
      }

      try {
        const response = await fetch(fetchURL);
        const {data} = (await response.json()) || {};
        setBlogs(data); // Set fetched data into state
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  return (
    <Box style={{padding: '16px'}}>
      {/* All posts */}
      <Typography variant='h2' style={{margin: '16px 0', fontWeight: '400'}}>
        All Posts
      </Typography>

      {/* Show loader while data is being fetched */}
      {loading ? (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
          }}>
          <CircularProgress
            style={{
              color: 'rgb(255, 152, 0)', // Custom color
              size: '100px', // Larger size
            }}
            size={60} // Adjust the size of the loader
          />
        </Box>
      ) : blogs?.length === 0 ? (
        // If no posts available
        <Box
          style={{
            display: 'flex', // Use flexbox to center content
            alignItems: 'center', // Center content vertically
            justifyContent: 'center', // Center content horizontally
            flexDirection: 'column', // Stack text vertically
            padding: '20px',
            minHeight: '300px',
          }}>
          <Typography
            variant='h3'
            style={{marginBottom: '8px', fontWeight: 'bold'}}>
            No Posts Available
          </Typography>
          <Typography variant='body1' style={{color: '#757575', fontSize: 16}}>
            Currently, there are no posts in this category{' '}
            <span style={{fontWeight: 'bold'}}>{selectedCategory}</span>. Please
            check again later.
          </Typography>
        </Box>
      ) : (
        // Show posts when data is available
        <Grid container spacing={3}>
          {blogs?.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                {/* Blog Image */}
                <img
                  src={blog.image || defaultImage} // Use default image if no blog image
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                  }}
                />
                {/* Blog Title */}
                <Typography
                  variant='h4'
                  style={{fontWeight: 'bold', marginBottom: '8px'}}>
                  {blog.title}
                </Typography>
                {/* Blog Author and Date */}
                <Typography
                  variant='body2'
                  style={{color: '#757575', marginBottom: '4px'}}>
                  {blog.author}
                </Typography>
                <Typography
                  variant='body2'
                  style={{color: '#757575', marginBottom: '4px'}}>
                  {blog.date}
                </Typography>
                {/* Blog Reading Time */}
                <Typography
                  variant='body2'
                  style={{fontWeight: 'bold', color: '#6200ea'}}>
                  {blog.time}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BlogsList;
