import gulp from 'gulp'

import gutil from 'gulp-util'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import sourceMaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

import { server } from './serve'
import config from '../config'
import handleErrors from '../utils/handleErrors'

export function processScripts(done) {
	gulp.src(config.dev.scripts)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(sourceMaps.init())
		.pipe(uglify())
		.pipe(rename((path) => {
			path.extname = '.min.js'
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(config.prod.scripts))
		.pipe(notify('Scripts task complete'))
		.pipe(server.stream())
		done()
}