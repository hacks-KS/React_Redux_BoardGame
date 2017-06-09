module.exports={
  entry: ["./src/provider.jsx"],
  output: {
    path: __dirname+"/public/script",
    filename: "compile.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
