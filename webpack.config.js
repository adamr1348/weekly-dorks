var path = require('path');
var home_DIR = path.join(__dirname, '/client/homePage/src');
var admin_DIR = path.join(__dirname, '/client/adminPage/src');
var home_DIST_DIR = path.join(__dirname, '/client/homePage/dist');
var admin_DIST_DIR = path.join(__dirname, 'client/adminPage/dist')

module.exports = [
  //home config
  {
    entry: {
      homePage: `${home_DIR}/index.jsx`
    },
    output: {
      filename: 'bundle.js',
      path: home_DIST_DIR
    },
    module: {
      rules: [{
          test: /\.js[x]?/,
          include: [home_DIR],
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  //admin config
  {
    entry: {
      homePage: `${admin_DIR}/index.jsx`
    },
    output: {
      filename: 'bundle.js',
      path: admin_DIST_DIR
    },
    module: {
      rules: [{
          test: /\.js[x]?/,
          include: [admin_DIR],
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
];