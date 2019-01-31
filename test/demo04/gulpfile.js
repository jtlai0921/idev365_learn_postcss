const { src,dest,watch } = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssvariables = require( 'postcss-css-variables' )
// const mixins = require('postcss-mixins')
// const postcssCalc = require('postcss-calc')

function scssTask(){
    return src('src/*.scss')
        // .pipe(sass({  }))
        .pipe(postcss([
            require('postcss-bem')({
                style: 'bem',
                // separators: { descendent: '__' }
            }),
            // require('postcss-bem-linter')({
                
            // }),
            // require('postcss-nesting')(),
            // require('postcss-mixins'),
            // require('postcss-each'),
            // require('postcss-for'),
            // require('postcss-css-variables')({
            //    variables:{
            //     '--other-var': { value: '#00CC00' },
            //     '--important-var': { value: '#ffCC00' }
            //    }
            // }),
            // require('postcss-calc')(),
        ]))
        .pipe(dest('dist/'))
}

function watchTask(){
    watch("src/*.scss",scssTask)
}

exports.watchTask = watchTask
exports.default = scssTask