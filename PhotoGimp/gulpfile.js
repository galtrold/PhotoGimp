var gulp = require('gulp');
var tsc = require("gulp-typescript");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var tsProject = tsc.createProject("tsconfig.json");
var sass = require('gulp-sass');


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("build-app", function () {
    return gulp.src([
            "app/**/*.ts"
    ])
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest("wwwroot/app"));
});

gulp.task("copy-templates", function () {
    return gulp.src(["app/**/*.html"])
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest("wwwroot/app/templates"));

});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./wwwroot/lib'));
});

gulp.task("import-lib", function () {
    return gulp.src([
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/es6-shim/es6-shim.map",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/systemjs/dist/system-polyfills.js.map",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/**/*.js",
            "node_modules/@angular/**/*.js",
            "node_modules/zone.js/**/*.js",
            "node_modules/reflect-metadata/**/*.js",
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
            "node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
            "node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
            "node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
            "node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"
    ],{ base: 'node_modules' }).pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("watch",
    function() {
        gulp.watch("app/**/*.ts", ["build-app"]);
        gulp.watch("app/**/*.html", ["copy-templates"]);
        gulp.watch("sass/**/*.scss", ["sass"]);
    });