var gulp = require('gulp'),
    print = require('gulp-print'),
    argv = require('yargs').argv
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate');

var args = {
    prefix: argv.prefix || 'custom'
}

gulp.task('default', function() {

  return gulp.src(['svg/*.svg'])
    .pipe(iconfont({ fontName: 'custom-font' }))
    .on('glyphs', function(glyphs, options) {

        var options = {
            glyphs: glyphs,
            fontName: 'custom-font',
            fontPath: '../fonts/', // set path to font (from your CSS file if relative)
            className: args.prefix
        };

        gulp.src('templates/custom-font.css')
            .pipe( consolidate('lodash', options) )
            .pipe( gulp.dest('dist/examples/') );

        gulp.src('templates/custom-font.html')
            .pipe( consolidate('lodash', options) )
            .pipe( gulp.dest('dist/examples/') ); // set path to export you

    })
    .pipe(gulp.dest('dist/fonts/'));

});