var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['browser-sync']);


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: ".",       //対象ディレクトリ
            index: "index.html"      //インデックスファイル
        }
    });
});

//
//ブラウザリロード
//
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: '【PROJECT_DIR_PATH】',
            index: 'index.html'
        },
        port: 3000
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('【PROJECT_DIR_PATH】/*', ['browser-reload']);
});
//
//監視ファイル
//
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("./css/*.css", ['bs-reload']);
    // gulp.watch("./htdocs/commons/js/*.js", ['bs-reload']);
});