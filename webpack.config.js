const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		app: ['./src/index.tsx'],
		vendor: ['react', 'react-dom'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[name].bundle.js',
		publicPath: '/',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			Src: path.resolve(__dirname, './src/'),
			Pages: path.resolve(__dirname, './src/pages'),
			Constants: path.resolve(__dirname, './src/contants'),
			Assets: path.resolve(__dirname, './assets/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png',
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: 'file-loader',
			},
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	devServer: {
		historyApiFallback: true,
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			favicon: './assets/favicon/favicon.ico',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './assets'),
					to: path.resolve(__dirname, './build/assets'),
				},
			],
		}),
	],
}
