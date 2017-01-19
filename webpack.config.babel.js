import path from 'path'
import webpack from 'webpack'
import SystemBellPlugin from 'system-bell-webpack-plugin'

const TARGET = process.env.npm_lifecycle_event || '';
const ROOT_PATH = __dirname;
const config = {
	paths: {
		dist: path.join(ROOT_PATH, 'dist'),
		public: path.join(ROOT_PATH, 'public')
	}
};


module.exports = {
	devtool: 'source-map',

	entry: {
		index: `${config.paths.public}/main.js`
	},

	output: {
		path: path.resolve(config.paths.dist),
		publicPath: '/',
		filename: '[name].js'
	},

	resolve: {
		extensions: ['', '.js']
	},

	module: {
		preLoaders: [
			/*{
				test: /\.js$/,
				loaders: ['isparta'],
				include: `${config.paths.public}`
			}, */

			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: `${config.paths.public}`
			}
		],

		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015']
				}
			},

			{
				test: /\.json$/,
				loader: 'json'
			}
		],

		plugins: [
			new SystemBellPlugin(),
			new webpack.optimize.DedupePlugin(),
		/*  new webpack.optimize.CommonsChunkPlugin(
				'vendor',
				'[name].[chunkhash].js'
			) */
		] 
	}
};