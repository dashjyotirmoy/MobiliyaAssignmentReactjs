var path = require('path');

module.exports = {
   entry: './mainRouting.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/'
      
   },
	
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
