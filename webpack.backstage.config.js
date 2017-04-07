const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const publicPath = 'http://localhost:8801/';
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// 1. 如需添加私有图标，可在如下的 svgDirs 数组中加入本地 svg 文件路径
//const svgDirs = [
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 自己私人的 svg 存放目录
  //path.resolve(__dirname, './src/svg/')
//];

// 2. 把属于 antd-mobile 内置 svg 文件也加入进来
//const antdDir = require.resolve('antd-mobile').replace(/warn\.js$/, '');
//svgDirs.push(antdDir);
module.exports = {
  devtool: 'source-map', // or 'inline-source-map'

  entry: { "index": [path.resolve(__dirname, 'backstage/src/index'),hotMiddlewareScript]},

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '/backstage'),
    publicPath: publicPath
  },

  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.jsx', '.js', '.json'],
  },

  module: {
    noParse: [/moment.js/],
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          plugins: [
            ["external-helpers"],
            ["babel-plugin-transform-runtime", { polyfill: false }],
            ["transform-runtime", { polyfill: false }],
            ["import", [{ "style": true, "libraryName": "antd" }]]
          ],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.(jpg|png)$/, loader: "url?limit=8192" },
      // svg-sprite for antd-mobile@1.0 注意：如果有其他 svg loader 设置，请 exclude 掉这里的 svgDirs 目录
      //{ test: /\.(svg)$/i, loader: 'svg-sprite', include: svgDirs,exclude:/imgs/ },
      // { test: /\.css$/, loader: 'style!css' }, // 把css处理成内联style，动态插入到页面
      { test: /\.less$/i, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
      { test: /\.css$/i, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/font-woff`,
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/font-woff`,
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/octet-stream`,
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: `${require.resolve('file-loader')}` },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=image/svg+xml`,
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
    //pxtorem({ rootValue: 100, propWhiteList: [] })
  ],
//   externals: {
//     "react": "React",
//     "react-dom": "ReactDOM"
//   },
//     devServer:{
//         historyApiFallback:true,
//         contentBase:'./',
//         quiet:false, //控制台不输出打包信息
//         noInfo:false,
//         hot:true,
//         inline:true, //开启页面自动刷新
//         lazy:false,//不开启懒加载
//         progress:true, //显示打包进度
//         watchOptions:{
//             aggregateTimeout:300
//         },
//         port:'8088'
//     },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.optimize.CommonsChunkPlugin({
      // minChunks: 2,
      name: 'shared',
      filename: 'shared.js'
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      React:'react',
      ReactDOM:'react-dom'
        }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
