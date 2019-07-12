const config = require("./gulp/config");
const gulp = require("gulp");
const load = require("require-dir");

load("./gulp/tasks",{ recurse: true })

const development = [
  "copy-third_party",
  "copy-images",
  "copy-javascripts",
  "compile-sass"
];
const production = [
  "copy-third_party",
  "copy-images",
  "minify-javascripts",
  "compile-sass"
];

gulp.task("default",gulp.parallel(config.env.IS_DEVELOPMENT?development:production));