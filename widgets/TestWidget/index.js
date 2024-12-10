import React from 'react';
import {Box} from '@material-ui/core';

//use widget registry to register the widget
import {registerWidget} from 'sling-core';

const TestWidget = () => {
  return <Box>I am a widget for Testing only.</Box>;
};

registerWidget('Custom Test Widget', TestWidget, {
  description: 'Test Widget.',
  ownership: 'private',
  type: 'widget',
  key: 'TestWidget',
  icon: 'search',
  props: [],
});

export default TestWidget;
