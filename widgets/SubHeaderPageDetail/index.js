import React, {useContext} from 'react';
import {Box, Typography, IconButton} from '@material-ui/core';
import {ThumbUp, Comment, Share} from '@material-ui/icons'; // Social icons
import AppContext from '../../utils/context/AppContext';
const moment = require('moment');

const SubHeaderDetailPage = ({
  title = "What's New in Sling 2.0",
  author = 'Sling Team',
  date = 'Aug 25, 2024',
  readTime = '5 min read',
  claps = 10,
  comments = 5,
}) => {
  const {blogDetail} = useContext(AppContext) || {};

  return (
    <Box
      style={{
        padding: '16px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
      }}>
      {/* Title */}
      <Typography
        variant='h1'
        style={{fontWeight: 'bold', marginBottom: '8px', fontSize: 36}}>
        {blogDetail?.title || title}
      </Typography>

      {/* Author, Date, and Read Time */}
      <Box display='flex' alignItems='center' marginBottom='16px'>
        <Typography
          variant='body1'
          style={{marginRight: '8px', fontWeight: 'bold'}}>
          {author}
        </Typography>
        <Typography
          variant='body1'
          style={{marginRight: '8px', color: '#757575'}}>
          ·{' '}
          {blogDetail?.createdAt
            ? moment(blogDetail.createdAt).format('MMM D, YYYY')
            : date}
        </Typography>
        <Typography variant='body1' style={{color: '#757575'}}>
          · {readTime}
        </Typography>
      </Box>

      {/* Social actions (Clap, Comments, Share) */}
      <Box display='flex' alignItems='center'>
        <IconButton style={{color: '#FF9800'}}>
          <ThumbUp />
        </IconButton>
        <Typography variant='body2' style={{marginRight: '16px'}}>
          {claps}
        </Typography>

        <IconButton style={{color: '#757575'}}>
          <Comment />
        </IconButton>
        <Typography variant='body2' style={{marginRight: '16px'}}>
          {comments}
        </Typography>

        <IconButton style={{color: '#757575'}}>
          <Share />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SubHeaderDetailPage;
