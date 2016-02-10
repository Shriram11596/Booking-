var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('add', function(){
  return gulp.src('./booking/*').pipe(git.add({args: '--all'}));
});

var x = Math.floor((Math.random() * 1000) + 1);

    gulp.task('commit',['add'],function(){
  return gulp.src('./booking/*').pipe(git.commit('commit'+x));
    });

    gulp.task('default',['commit'], function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

 


