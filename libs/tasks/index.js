import gulp from 'gulp'
import chalk from 'chalk'
import config from '../config'

import { processStyles } from './styles'
import { processScripts, processAbout } from './scripts'
import { optimizeImages } from './images'
import { serve } from './serve'
import { watch } from './watch'

gulp.task('styles', processStyles);
gulp.task('scripts', processScripts);
gulp.task('images', optimizeImages);
gulp.task('aboutScripts', processAbout);

gulp.task(serve);
gulp.task(watch);

const stylesTask = gulp.task('styles');
const scriptsTask = gulp.task('scripts');
const imageTask = gulp.task('images');
const aboutTask = gulp.task('aboutScripts');

gulp.task('default',
	gulp.series('scripts', 'styles', 'images', serve, watch)
);