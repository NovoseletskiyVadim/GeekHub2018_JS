const path = require( 'path' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = ( env, options ) => {
	return {
		entry: ['./src/js/main.js','./src/sass/style.scss'],
		
		output: {
			path: path.resolve( __dirname, 'dist' ),
			filename: 'bundle.js',
			publicPath:'dist',
		},
		devServer:{
			overlay:true
		},

		// devtool:  'cheap-eval-source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
					},
					exclude: /(node_modules)/
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									require('autoprefixer')
								],
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
						
							}
						}
					]
				},
				// {
				// 	test: /\.(png|jpg|gif)$/,
				// 	use: [
				// 		{
				// 			loader: 'file-loader',
				// 			options: {
				// 				name: '[name].[ext]',
				// 				outputPath: 'dist/'
				// 			}
				// 		}
				// 	]
				// },
			],
		},
		
		plugins: [
			new MiniCssExtractPlugin({
				filename: './style.css',
				chunkFilename: '[id].css',
			})
		],
		
	}
};