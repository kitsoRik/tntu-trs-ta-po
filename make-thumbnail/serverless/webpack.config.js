// eslint-disable-next-line @typescript-eslint/no-var-requires
var nodeExternals = require('webpack-node-externals');

module.exports = {
  // we use webpack-node-externals to excludes all node deps.
  // You can manually set the externals too.
  externals: [nodeExternals()],
};
