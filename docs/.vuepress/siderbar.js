const { createSideBarConfig } = require('./util');
const VUE3_PATH = '/blogs/Vue3';
const REACT_PATH = '/blogs/React';
const NODE_PATH = '/blogs/Node';
const WEBPACK_PATH = '/blogs/Webpack';

module.exports = {
  [VUE3_PATH]: [createSideBarConfig('Vue3', VUE3_PATH)],
  [REACT_PATH]: [createSideBarConfig('React', VUE3_PATH)],
  [NODE_PATH]: [createSideBarConfig('Node', NODE_PATH)],
  [WEBPACK_PATH]: [createSideBarConfig('Webpack', WEBPACK_PATH)],
};
