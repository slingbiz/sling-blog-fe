import React from 'react';
import {Box, Typography, IconButton} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

const BlogFooter = () => {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 0',
        borderTop: '1px solid #e0e0e0',
      }}>
      <Box>
        <Typography
          variant='body2'
          style={{fontWeight: 'bold', marginBottom: '8px', fontSize: 18}}>
          Written by Andrew Forward
        </Typography>
        <Typography variant='body2' style={{color: '#757575', fontSize: 16}}>
          157 Followers • 46 Following
        </Typography>
        <Typography
          variant='body2'
          style={{color: '#757575', marginTop: '8px', fontSize: 14}}>
          Back to PHP and #elixir; flirting with #Elm. TDD infected since jUnit
          2.1, former cheesemaker, and working at #crossfit.
        </Typography>
      </Box>

      {/* Action buttons */}
    </Box>
  );
};

export default BlogFooter;
