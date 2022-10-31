var gulp = require('gulp');

//多个文件合并为一个文件
var concat = require('gulp-concat');

//CSS压缩成一行
var minifyCss = require('gulp-minify-css');

//对文件名加MD5后缀
var rev = require('gulp-rev');

//js文件压缩
var uglify = require('gulp-uglify');

//路径替换
var revCollector = require('gulp-rev-collector');

//HTML压缩
var htmlmin = require('gulp-htmlmin');

//自动刷新
var browserSync = require('browser-sync');


//图片拷贝
gulp.task('copyImage', gulp.series(() => {
    gulp.src(
        ['src/images/*.*', 'src/images/icon/*.*', 'src/images/banner/*.*'],
        {
            base: './src'
        }
    )
        .pipe(gulp.dest('dist'));
}));


//字体拷贝
gulp.task('copyFont', gulp.series(() => {
    gulp.src(
        ['src/fonts/*.*', 'src/css/font-awesome.min.css'],
        {
            base: './src'
        }
    )
        .pipe(gulp.dest('dist'));
}));


//第三方框架拷贝
gulp.task('copyLib', gulp.series(() => {
    gulp.src(
        'src/lib/jquery/*.*',
        {
            base: './src'
        }
    )
        .pipe(gulp.dest('dist'));
}));


//处理网站首页的CSS样式
gulp.task('indexCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/index.css'])
        .pipe(concat('index.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品分类页的CSS样式
gulp.task('classCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/cate.css'])
        .pipe(concat('cate.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理网站登录页的CSS样式
gulp.task('loginCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/login.css'])
        .pipe(concat('login.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品信息展示页的CSS样式
gulp.task('proinfoCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/proinfo.css'])
        .pipe(concat('proinfo.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理网站注册页的CSS样式
gulp.task('registerCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/register.css'])
        .pipe(concat('register.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品筛选页的CSS样式
gulp.task('selectCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/select.css'])
        .pipe(concat('select.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理购物车与结算页的CSS样式
gulp.task('shopcarCss', gulp.series(() => {
    gulp.src(['src/css/reset.css', 'src/css/common.css', 'src/css/module.css', 'src/css/shopcar.css'])
        .pipe(concat('shopcar.min.css')) //CSS文件合并
        .pipe(minifyCss()) //压缩CSS文件
        .pipe(gulp.dest('dist/css')) //文件的输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理网站首页的js脚本
gulp.task('indexJs', gulp.series(() => {
    gulp.src(['src/js/animate.js', 'src/js/util.js', 'src/js/config.js', 'src/js/common.js', 'src/js/index.js'])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品分类页的js脚本
gulp.task('classJs', gulp.series(() => {
    gulp.src(['src/js/animate.js', 'src/js/util.js', 'src/js/config.js', 'src/js/common.js', 'src/js/cate.js'])
        .pipe(concat('cate.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理网站登录页的js脚本
gulp.task('loginJs', gulp.series(() => {
    gulp.src(['src/js/tools.js', 'src/js/util.js', 'src/js/config.js', 'src/js/login.js'])
        .pipe(concat('login.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品信息展示页的js脚本
gulp.task('proinfoJs', gulp.series(() => {
    gulp.src(['src/js/common.js', 'src/js/config.js', 'src/js/util.js', 'src/js/advisory.js', 'src/js/proinfo.js'])
        .pipe(concat('proinfo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理网站注册页的js脚本
gulp.task('registerJs', gulp.series(() => {
    gulp.src(['src/js/tools.js', 'src/js/util.js', 'src/js/config.js', 'src/js/register.js'])
        .pipe(concat('register.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理商品筛选页的js脚本
gulp.task('selectJs', gulp.series(() => {
    gulp.src(['src/js/util.js', 'src/js/config.js', 'src/js/common.js', 'src/js/product.js', 'src/js/select.js'])
        .pipe(concat('select.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//处理购物车与结算页的js脚本
gulp.task('shopcarJs', gulp.series(() => {
    gulp.src(['src/js/common.js', 'src/js/config.js', 'src/js/util.js', 'src/js/tools.js', 'src/js/shopcar.js'])
        .pipe(concat('shopcar.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//压缩HTML的任务
gulp.task('htmlTask', gulp.series(() => {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };

    gulp.src('./src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
}));


//创建一个刷新浏览器的任务
gulp.task('server', gulp.series(() => {
    browserSync({
        server: {
            baseDir: ['dist']
        },
    }, function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });

    gulp.watch('src/css/*.css', gulp.series('cssTask'));
    gulp.watch('src/js/*.js', gulp.series('jsTask'));
    gulp.watch('src/*.html', gulp.series('htmlTask'));
}));

//处理CSS样式的任务
gulp.task('cssTask', gulp.series(gulp.parallel('indexCss', 'classCss', 'loginCss', 'proinfoCss', 'registerCss', 'selectCss', 'shopcarCss')));

//处理js脚本的任务
gulp.task('jsTask', gulp.series(gulp.parallel('indexJs', 'classJs', 'loginJs', 'proinfoJs', 'registerJs', 'selectJs', 'shopcarJs')));

//默认任务
gulp.task('defaultTask', gulp.series(gulp.parallel('copyImage', 'copyFont', 'copyLib', 'cssTask', 'jsTask', 'htmlTask')));