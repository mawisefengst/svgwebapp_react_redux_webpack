var webpack = require("webpack");

module.exports = {
	devtool: 'inline-source-map',
	entry : [
		'./client/client.js'
	],
	output : {
		path: './dist/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
 	devServer: {
	    contentBase: './client',
	    inline: true
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel',
				exclude : /node_modules/,
				query:{
					presets: ['react', 'es2015','react-hmre'],
               		plugins: ["transform-decorators-legacy", "transform-class-properties"]
				}
			},
	        {
	            test:/\.css$/,
	            loader: 'style!css!'
	        }
		]
	}
}
