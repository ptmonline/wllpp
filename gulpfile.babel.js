'use strict';

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

import less from "gulp-less";
import cleanCSS from'gulp-clean-css';
import path from "path";

gulp.task("transpiler", () => {

		return browserify("./app/app.js")
				.transform("babelify")
				.bundle()
				.pipe(source("bundle.js"))
				.pipe(gulp.dest("./app/dist"));
});
gulp.task('less', () => {
  return gulp.src('./app/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
		.pipe(cleanCSS())
    .pipe(gulp.dest('./app/stylesheet'));
});

gulp.task('default', ['less', 'transpiler']);

gulp.task('watch', () =>{
	gulp.watch('./app/less/*.less', ['less']);
	// gulp.watch('./app/app.js', ['transpiler']);
})
