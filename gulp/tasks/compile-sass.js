const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");

gulp.task("compile-sass.clean",() => {
  return del("./stylesheets/**/*", { cwd: config.path.output });
});
gulp.task("compile-sass.main",() => {
  return gulp.src("./stylesheets/**/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(gulp.dest("./stylesheets",{ cwd: config.path.output }))
});

gulp.task("compile-sass",gulp.series(
  "compile-sass.clean",
  "compile-sass.main"
));