var gulp = require('gulp'),
sass= require('gulp-sass'), 
browserSync= require('browser-sync'); 

gulp.task('sass', function(){ 
    return gulp.src('app/sass/main.sass') // Берем источник
    .pipe(sass()) 
    .pipe(gulp.dest('app/css')) 
    // .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('mywatch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});
