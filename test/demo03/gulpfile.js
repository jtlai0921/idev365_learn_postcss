const { src,dest,parallel,series } = require('gulp')
const postcss = require('postcss')
const autoprefixer = require('gulp-autoprefixer')
// const cssvariables = require('postcss-css-variables')
// const cssnano = require('gulp-cssnano')

function cssTask(cb){
    return src('css/*.css')
            // .pipe( postcss([ autoprefixer ]) )
            .on('error',function(err){
                console.log(err)
            })
            // .pipe(dest("dest/"))
}

exports.cssTask = cssTask