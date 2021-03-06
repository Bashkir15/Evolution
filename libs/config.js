
const config = {
	dev: {
		views: './public/**/*.ejs',
		styles: './public/static/sass/**/*.sass',
		mainSass: './public/static/sass/main.sass',
		images: './public/static/images/*.+(png|jpg|gif|svg)',
		mainScript: './dist/index.js',
		aboutScript: './dist/about.js'
	},

	prod: {
		styles: './dist/styles',
		scripts: './dist/scripts',
		images: './dist/images'
	}
}

export default config