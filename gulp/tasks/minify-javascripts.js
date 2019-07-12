const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

gulp.task("minify-javascripts.clean",() => {
  return del("./javascripts/**/*", { cwd: config.path.output });
});

gulp.task("minify-javascripts.babel",() => {
  return gulp.src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(babel({
      presets: [
        ["@babel/env", {
          "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"],
          "useBuiltIns": "usage",
          "corejs": 3
        }]
      ]
    }))
    .pipe(gulp.dest("./javascripts",{ cwd: config.path.input }));
});

gulp.task("minify-javascripts.main",() => {
  return gulp.src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(uglify())
    .pipe(gulp.dest("./javascripts",{ cwd: config.path.output }));
});

gulp.task("minify-javascripts",gulp.series(
  "minify-javascripts.clean",
  "minify-javascripts.babel",
  "minify-javascripts.main"
));