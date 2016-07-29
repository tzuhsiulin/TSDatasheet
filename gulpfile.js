const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssScss = require("postcss-scss");
const precss = require("precss");
const rename = require("gulp-rename");

gulp.task("scss", () => {
  return gulp.src("src/styles/main.scss")
    .pipe(postcss([
      precss(),
      autoprefixer({ browsers: ["last 2 version"] }),
    ], { syntax: postcssScss }))
    .pipe(rename("main.css"))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", () => {
  gulp.watch("src/styles/**/*scss", ["scss"]);
});
