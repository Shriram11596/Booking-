var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('add', function(){
  return gulp.src('./booking/*').pipe(git.add({args: '--all'}));
});

    gulp.task('commit',['add'],function(){
  return gulp.src('./booking/*').pipe(git.commit('commit'));
    });

    gulp.task('default',['commit'], function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

 


