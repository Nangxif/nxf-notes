const fs = require('fs');
const path = require('path');
const getFile = (prefixPath) => {
  return fs
    .readdirSync(path.join(process.cwd(), 'docs', prefixPath))
    .map((item) => `${prefixPath}/${item.replace('.md', '')}`);
};

const createSideBarConfig = (title, prefixPath, collapsable = true) => {
  return {
    title,
    collapsable,
    path: prefixPath,
    children: getFile(prefixPath),
  };
};

module.exports = {
  createSideBarConfig,
};
