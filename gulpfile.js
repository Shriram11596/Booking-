var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('add', function(){
  return gulp.src('./booking/*').pipe(git.add({args: '--all'}));
});

 //Run git commit without checking for a message using raw arguments 
gulp.task('commit', function(){
  return gulp.src('./booking/*')
    .pipe(git.commit(undefined, {
      args: '-m "initial commit"',
      disableMessageRequirement: true
    }));
});

    gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

    gulp.task('default',['add','commit','push']);


