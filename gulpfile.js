var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('add', function(){
  return gulp.src('./booking/*').pipe(git.add({args: '--all'}));
});

    gulp.task('commit',function(){
  return gulp.src('./booking/*').pipe(git.commit('pushing changes'));
    });

    gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

    gulp.task('default',['add','commit','push']);


