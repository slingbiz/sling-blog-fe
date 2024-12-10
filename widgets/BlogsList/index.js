import React, {useState} from 'react';
import {Grid, Box, Typography} from '@material-ui/core';

const blogsInit = [
  {
    title: 'SOLID principles for JavaScript',
    author: 'Frank Joseph',
    date: 'Dec 5, 2024',
    time: '10 min read',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    title: 'Master JavaScript date and time: From Moment.js to Temporal',
    author: 'Yan Sun',
    date: 'Dec 4, 2024',
    time: '9 min read',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    title: 'npm vs. npx: What’s the difference?',
    author: 'Fimber Elemuwa',
    date: 'Dec 3, 2024',
    time: '5 min read',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    title: 'Understanding Async/Await in JavaScript',
    author: 'Alex Smith',
    date: 'Nov 30, 2024',
    time: '8 min read',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    title: 'Top 10 React Performance Tips',
    author: 'Jane Doe',
    date: 'Nov 29, 2024',
    time: '7 min read',
    image:
      'https://via.placeholder.com/300x200/FFFACD/000000?text=React+Performance+Tips',
  },
  {
    title: 'Exploring the New JavaScript Features in ES2024',
    author: 'John Doe',
    date: 'Nov 28, 2024',
    time: '6 min read',
    image:
      'https://via.placeholder.com/300x200/FFD700/000000?text=JavaScript+Features+in+ES2024',
  },
  {
    title: 'GraphQL vs. REST: A Comparison',
    author: 'John Smith',
    date: 'Nov 27, 2024',
    time: '5 min read',
    image:
      'https://via.placeholder.com/300x200/FF6347/000000?text=GraphQL+vs+REST',
  },
  {
    title: 'How to Use Context API in React',
    author: 'Sarah Lee',
    date: 'Nov 26, 2024',
    time: '8 min read',
    image:
      'https://via.placeholder.com/300x200/8A2BE2/000000?text=Context+API+in+React',
  },
  {
    title: 'CSS Grid vs Flexbox: Which One to Choose?',
    author: 'David Brown',
    date: 'Nov 25, 2024',
    time: '10 min read',
    image:
      'https://via.placeholder.com/300x200/8FBC8F/000000?text=CSS+Grid+vs+Flexbox',
  },
  {
    title: 'The Future of Web Development',
    author: 'Lilly Moore',
    date: 'Nov 24, 2024',
    time: '9 min read',
    image:
      'https://via.placeholder.com/300x200/00BFFF/000000?text=The+Future+of+Web+Development',
  },
];

const BlogsList = () => {
  const [blogs, setBlogs] = useState(blogsInit);

  return (
    <Box style={{padding: '16px'}}>
      <Grid container spacing={3}>
        {blogs.map((blog, index) => (
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
                src={blog.image}
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
                variant='h6'
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
    </Box>
  );
};

export default BlogsList;
