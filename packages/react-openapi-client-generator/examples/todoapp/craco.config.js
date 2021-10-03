const path = require('path');

module.exports = ({ env }) => {
  return {
    webpack: {
      alias: {
        react: path.resolve('../../node_modules/react'),
        'react-dom': path.resolve('../../node_modules/react-dom'),
      },
    },
  };
};
