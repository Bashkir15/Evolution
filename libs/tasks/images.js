import gulp from 'gulp'
import chalk from 'chalk'
import pngquant from 'imagemin-pngquant'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import cache from 'gulp-cache'
import plumber from 'gulp-plumber'

import handleErrors from '../utils/handleErrors'


import config from '../config'

export function optimizeImages(done) {
	gulp.src(config.dev.images)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(newer(config.prod.images))
		.pipe(cache(imagemin({
			progressive: true,
			interlaced: true,
			use: [pngquant()]
		})))
		.pipe(gulp.dest(config.prod.images))
		done();
}