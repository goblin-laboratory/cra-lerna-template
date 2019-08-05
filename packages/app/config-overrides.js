/* eslint-disable */
const path = require('path');
const {
  override,
  babelInclude,
  fixBabelImports,
  addLessLoader,
  // addBundleVisualizer ,
} = require('customize-cra');
const paths = require('react-scripts/config/paths');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

// paths.servedPath = './';

const removePlugin = (plugins, name) => {
  const list = plugins.filter(it => !(it.constructor && it.constructor.name && name === it.constructor.name));
  if (list.length === plugins.length) {
    throw new Error(`Can not found plugin: ${name}.`);
  }
  return list;
};

const overrideGenerateSWConfig = (config, env) => {
  if ('development' === env) {
    return config;
  }
  config.plugins = removePlugin(config.plugins, 'GenerateSW');
  const workboxWebpackPlugin = new WorkboxWebpackPlugin.GenerateSW({
    clientsClaim: true,
    exclude: [/\.map$/, /asset-manifest\.json$/],
    importWorkboxFrom: 'local',
    // navigateFallback: paths.servedPath + '/index.html',
    // navigateFallbackBlacklist: [
    //   // Exclude URLs starting with /_, as they're likely an API call
    //   new RegExp('^/_'),
    //   // Exclude URLs containing a dot, as they're likely a resource in
    //   // public/ and not a SPA route
    //   new RegExp('/[^/]+\\.[^/]+$'),
    // ],
  });
  config.plugins.push(workboxWebpackPlugin);
  return config;
};

module.exports = {
  webpack: override(
    overrideGenerateSWConfig,
    babelInclude([
      path.resolve('src'), // don't forget this
      path.resolve('../components/lib'),
      path.resolve('../utils/lib/showModal'),
    ]),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    fixBabelImports('ant-design-pro', {
      libraryName: 'ant-design-pro',
      libraryDirectory: 'lib',
      style: true,
      camel2DashComponentName: false,
    }),
    addLessLoader({
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
      // modifyVars: { '@primary-color': '#1DA57A' },
    }),
    // addBundleVisualizer(),
  ),
  // devServer: configFunction => {
  //   return (proxy, allowedHost) => {
  //     const config = configFunction(proxy, allowedHost);
  //     config.historyApiFallback.rewrites = [{ from: /^\/login\.html/, to: '/build/login.html' }];
  //     return config;
  //   };
  // },
};
