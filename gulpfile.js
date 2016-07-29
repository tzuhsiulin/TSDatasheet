const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssScss = require("postcss-scss");
const precss = require("precss");
const postcssCalc = require("postcss-calc");

gulp.task("scss", () => {
  return gulp.src("src/styles/main.css")
    .pipe(postcss([
      precss(),
      postcssCalc(),
      autoprefixer({ browsers: ["last 2 version"] }),
    ], { syntax: postcssScss }))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", () => {
  gulp.watch("src/styles/**/*css", ["scss"]);
});
