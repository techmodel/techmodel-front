const path = require('path');

import dotenv from "dotenv";
dotenv.config();
const environmentVariables = [
    "API_URL",
    "ENVIRONMENT",
];

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new webpack.EnvironmentPlugin(environmentVariables),
  ],
};
