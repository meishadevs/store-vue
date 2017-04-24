//设置为严格模式
'use strict';

//导包
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

//CSS文件压缩
gulp.task('style', function() {
  gulp.src('src/css/*.css')

    //压缩CSS文件
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    //通知浏览器刷新
    .pipe(browserSync.reload({
      stream: true
    }));
});


//JavaScript文件压缩
gulp.task('script', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))

    //通知浏览器刷新
    .pipe(browserSync.reload({
      stream: true
    }));
});


//图片复制任务
gulp.task('imageTask1', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))

    //通知浏览器刷新
    .pipe(browserSync.reload({
      stream: true
    }));
});


//图片复制任务
gulp.task('imageTask2', function() {
    gulp.src('src/images/banner/*.*')
        .pipe(gulp.dest('dist/images/banner'))

        //通知浏览器刷新
        .pipe(browserSync.reload({
            stream: true
        }));
});


//图片复制任务
gulp.task('imageTask3', function() {
    gulp.src('src/images/icon/*.*')
        .pipe(gulp.dest('dist/images/icon'))

        //通知浏览器刷新
        .pipe(browserSync.reload({
            stream: true
        }));
});


//HTML压缩
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))

    //通知浏览器刷新
    .pipe(browserSync.reload({
      stream: true
    }));
});


//首先执行一次默认任务
gulp.task('default',['style', 'script', 'imageTask1', 'imageTask2', 'imageTask3', 'html']);


gulp.task('serve', function() {
  browserSync({
    port: 2017,
    server: {
      baseDir: ['src']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

  //监视CSS文件是否发生了变化
  gulp.watch('src/css/*.css',['style']);

  //监视JS文件是否发生了变化
  gulp.watch('src/js/*.js',['script']);

  //监视图片是否发生了变化
  gulp.watch('src/images/*.*',['imageTask1']);
  gulp.watch('src/images/banner/*.*',['imageTask2']);
  gulp.watch('src/images/icon/*.*',['imageTask3']);

  //监视HTML文件是否发生了变化
  gulp.watch('src/*.html',['html']);
});
