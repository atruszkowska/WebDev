const gulp = require('gulp');
const babel = require('gulp-babel');

// /**/ - any directory includind subdirectories

// Done is an automatic callback function to signalize the 
// end of the execution due to potential asynchronous execution,
//
// https://stackoverflow.com/a/36899424
//

gulp.task('default', function(done){
	// Node source
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	// Browser source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));

	// Singnal end
	done();
});

