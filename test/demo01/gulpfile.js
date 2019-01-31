var gulp,{ series,src,pipe,parallel,dest,watch } = require('gulp');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cssnano = require('cssnano');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
var sass = require('gulp-sass');


function stylesTask( cb ){
        src('src/*.css')
        .pipe(postcss([ autoprefixer ]))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps/'))
        .pipe(dest('dest/'));
        cb()
}

function renameTask(cb){
        src('dest/example.css')
        .pipe(postcss([ cssnano ]))
        .pipe(rename('example.min.css'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps/'))
        .pipe(dest("dest/"));
        cb()
}

function lintStyles(cb){
    return src("src/*.css")
        .pipe(postcss([
            stylelint({
                "rules":{
                    // "color-no-invalid-hex":2,
                    // "declaration-colon-space-before":[2,"never"],
                    // "indentation":[2,2],
                    // "number-leading-zero":[2,"always"]
                }
            }),
            reporter({
                clearMessages:true,
            })
        ]))
}


function sassTask(cb) {
    return src('src/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(dest('dest/'));
      
}

exports.watch = function(cb){
    var watcher = watch('src/*.scss',sassTask)
}

exports.renameTask = renameTask
exports.stylesTask = stylesTask
exports.lintStyles = lintStyles
exports.sassTask = sassTask
exports.default = series(stylesTask,renameTask)

