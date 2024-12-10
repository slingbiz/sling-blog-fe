import React from 'react';
import {Box} from '@material-ui/core';

//use widget registry to register the widget
import {registerWidget} from 'sling-core';

const TestWidget2 = () => {
  return <Box>I am a widget for Testing only. Widget number 2</Box>;
};

registerWidget('Custom Test Widget 2222', TestWidget2, {
  description: 'Test Widget 2222.',
  ownership: 'private',
  type: 'widget',
  key: 'TestWidget2',
  icon: 'widgets',
  props: [],
});

export default TestWidget2;
