import React from 'react';

import Error404 from '../components/Error404/index';
function Error({statusCode}) {
  console.log(statusCode, '[statusCode] @_error.js');
  return <Error404 />;
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {statusCode};
};

export default Error;
