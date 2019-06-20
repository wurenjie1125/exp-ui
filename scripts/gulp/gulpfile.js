const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });


gulp.task('less', function(){
  let lessPath = path.resolve(__dirname, '../../components/**/**.less');
  console.log('lessPath',lessPath);
  return gulp.src(lessPath)
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest(path.resolve(__dirname, '../../lib')));
})

gulp.task('default', gulp.series(['less']));
