module.exports = function karmaConfig(config) {
	config.set({
		frameworks: [
			'mocha'
		],

		reporters: [
			'spec',
			'coverage'
		],

		files: [
			'node_modules/phantoms-polyfill/bind-polyfill.js',
			'tests/**/*.js'
		],

		preprocessor: {
			'tests/**/*.js*': ['webpack', 'sourcemap'],
			'public/**/*.*': 'coverage'
		},

		browsers: [
			'PhantomJS'
		],

		singleRun: true,

		coverageReporter: {
			reporters: [
				{
					type: 'lcovonly',
					subdir: '.'
				},

				{
					type: 'json',
					subdir: '.'
				},

				{
					type: 'html',
					subdir: '.'
				}
			]
		},

		webpack: require('./webpack.config.babel.js'),

		webpackMiddleware: {
			noInfo: true
		}
	});
};