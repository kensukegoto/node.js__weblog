const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");

gulp.task("copy-javascripts.clean",() => {
  return del("./javascripts/**/*", { cwd: config.path.output });
});

gulp.task("copy-javascripts.babel",() => {
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

gulp.task("copy-javascripts.main",() => {
  return gulp.src("./javascripts/**/*",{ cwd: config.path.input })
    .pipe(gulp.dest("./javascripts",{ cwd: config.path.output }));
});

gulp.task("copy-javascripts",gulp.series(
  "copy-javascripts.clean","copy-javascripts.babel","copy-javascripts.main"
));