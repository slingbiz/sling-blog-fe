import React, {useContext, useEffect} from 'react';
import {Box, Typography} from '@material-ui/core';
import AppContext from '../../utils/context/AppContext';
const defaultImage = '/images/blog-default.png'; // Update this path to your local default image

const BlogDetailBody = () => {
  const {blogDetail, setBlogDetail, query} = useContext(AppContext) || {};
  const [loading, setLoading] = React.useState(false);

  const {global} = query || {};
  const slug = global ? global[1] : '';

  useEffect(() => {
    const fetchBlogDetail = async () => {
      setLoading(true); // Start loading when the fetch is initiated
      let fetchURL = `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/articles?filters[slug][$eq]=${slug}`;

      try {
        const response = await fetch(fetchURL);
        const {data} = (await response.json()) || {};
        setBlogDetail(data?.[0]); // Set fetched data into state
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchBlogDetail();
  }, [query]);

  return (
    <Box style={{padding: '20px', backgroundColor: '#f9f9f9'}}>
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <img
          style={{maxHeight: '300px', textAlign: 'center'}}
          src={blogDetail?.image || defaultImage}
        />
      </Box>
      <Typography
        variant='h3'
        style={{
          marginBottom: '16px',
          fontWeight: '200',
          fontSize: 18,
        }}></Typography>

      <Typography
        variant='body1'
        style={{marginBottom: '16px', fontWeight: '400', fontSize: 18}}>
        {blogDetail?.content}
      </Typography>

      {/* Section Title */}
      <Typography
        variant='h5'
        style={{marginBottom: '12px', fontWeight: 'bold'}}>
        Configure Your Domain
      </Typography>

      {/* Section Content */}
      <Typography
        variant='body1'
        style={{marginBottom: '16px', fontWeight: '400'}}>
        If you are setting up your account directly against your domain, then
        things are a bit easier (and the instructions work a little more as
        expected). If you are setting up against a subdomain, skim this section
        as the subdomain instructions are a bit different.
      </Typography>

      {/* Domain Information */}
      <Box
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}>
        <Typography variant='body2' style={{fontWeight: 'bold'}}>
          mydomain.com
        </Typography>
        <Typography variant='body2' style={{color: '#757575'}}>
          Domain Information
        </Typography>
        <Box display='flex' flexDirection='column' style={{marginTop: '8px'}}>
          <Typography variant='body2'>State: Active</Typography>
          <Typography variant='body2'>IP Address: 1.2.3.4</Typography>
          <Typography variant='body2'>
            SMTP Hostname: smtp.mailgun.org
          </Typography>
          <Typography variant='body2'>
            Default SMTP Login: postmaster@mydomain.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogDetailBody;
