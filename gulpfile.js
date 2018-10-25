const gulp = require("gulp");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");

const cleancss_Options = {
	debug: true
};
const autoprefixer_Options = {
	browsers: ["last 2 versions"],
	cascade: false
};
const imagemin_Plugins = [
	imagemin.gifsicle({ interlaced: true }),
	imagemin.jpegtran({ progressive: true }),
	imagemin.optipng({ optimizationLevel: 5 }),
	imagemin.svgo({
		plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
	})
];
const imagemin_Options = {
	verbose: true
};

//Optimize Images
gulp.task("img-min", function() {
	return gulp
		.src("src/img/*")
		.pipe(imagemin(imagemin_Plugins, imagemin_Options))
		.pipe(gulp.dest("dist/img/"));
});

// Minify CSS
gulp.task("minify-css", function() {
	return gulp
		.src("src/css/*.css")
		.pipe(autoprefixer(autoprefixer_Options))
		.pipe(cleancss(cleancss_Options))
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("dist/css/"));
});

// Uglify JS
gulp.task("uglify-js", function() {
	return gulp
		.src("src/js/*.js")
		.pipe(
			uglify().on("error", function(e) {
				console.log(e);
			})
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("dist/js/"));
});

// Gulp tasks
gulp.task("img", gulp.parallel("img-min"));
gulp.task("css", gulp.parallel("minify-css"));
gulp.task("js", gulp.parallel("uglify-js"));

// Default task
gulp.task("default", gulp.parallel("img", "css", "js"));

// Watch files for changes
gulp.task("watch", function() {
	gulp.watch("src/img/*", gulp.parallel("img"));
	gulp.watch("src/css/*.css", gulp.parallel("css"));
	gulp.watch("src/js/*.js", gulp.parallel("js"));
});
