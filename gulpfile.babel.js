import tasks from './libs/tasks'

module.exports = require('gulp');

/**import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import rename from 'gulp-rename'
import cache from 'gulp-cache'
import sourceMaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import newer from 'gulp-newer'

import autoprefixer from 'gulp-autoprefixer'
import cmq from 'gulp-combine-media-queries'
import pure from 'gulp-purifycss'
import sass from 'gulp-sass'
import uglifycss from 'gulp-uglifycss'
import uglify from 'gulp-uglify'

import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'

import browserSync from 'browser-sync'
import fs from 'fs'
import minimist from 'minimist'

const paths = {
	dev: {
		views: './public/**//**.ejs',
		styles: './public/static/sass/**//*.sass',
		mainSass: './public/static/sass/main.sass',
		images: './public/static/images/**//*.+(png|jpg|gif|svg)',
		js: './dist/main.js'
	},

	prod: {
		styles: './dist/styles',
		js: './dist/scripts',
		images: './dist/images'
	}
};

const options = {
	string: 'env',
	default: {
		env: process.env.NODE_ENV || 'development'
	}
};


let config;


function handleErrors(...args) {
	gutil.beep();
	this.emit('end');

	notify.onError({
		title: 'Error',
		message: '<%= error.message %>'
	}).apply(this, args);
}

function updateConfig(done) {
	const pkg = JSON.parse(fs.readFileSync('./package.json', {encoding: 'utf-8'}));

	config = Object.assign({
		args: minimist(process.argv.slice(2), options)
	}, {
		version: pkg.version,
		title: pkg.title,
		description: pkg.description,
		author: pkg.author,
		extensions: pks.extensions,
		vendors: pkg.vendors
	}, pkg.config, pkg.directories);

	done();
}

gulp.task('browserSync', (done) => {
	browserSync.init(null, {
		proxy: 'http://localhost:8000',
		files: ["public/**//*.*"],
		port: 7000
	});
	done();
});

gulp.task('styles', (done) => {
	gulp.src(paths.dev.mainSass)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(sourceMaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
		.pipe(pure(['./public/**//*.ejs', './public/**//*.js']))
		.pipe(uglifycss({
			maxLineLne: 80
		}))
		.pipe(rename((path) => {
			path.extname = '.min.css'
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(paths.prod.styles))
		.pipe(notify('Styles Task Complete'))
		.pipe(browserSync.reload({stream: true}))
		done();
});

gulp.task('scripts', (done) => {
	gulp.src(paths.dev.js)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(sourceMaps.init())
		.pipe(uglify())
		.pipe(rename((path) => {
			path.extname = '.min.js'
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(paths.prod.js))
		.pipe(notify('Scripts Task Complete'))
		.pipe(browserSync.reload({stream: true}))
		done();
});

gulp.task('html', (done) => {
	gulp.src(paths.dev.views)
		.pipe(plumber())
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('images', () => {
	gulp.src(paths.dev.images)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(newer(paths.prod.images))
		.pipe(cache(imagemin({
			progressive: true,
			interlaed: true,
			use: [pngquant()]
		})))
		.pipe(gulp.dest(paths.prod.images))
		done();
})

gulp.task(
	'default',
	gulp.parallel('browserSync', 'styles', 'html', 'html' )); */
