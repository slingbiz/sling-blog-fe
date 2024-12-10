const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      env: {},
    };
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      // distDir: 'build',
      env: {},
    };
  }

  return {
    // distDir: 'build',
    env: {},
  };
};
