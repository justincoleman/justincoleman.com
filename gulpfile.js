var gulp = require('gulp'),
    del = require('del'),
    livereload = require('gulp-livereload');

var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-ruby-sass': 'sass'
    }
});

gulp.task('templates', function() {
    return gulp.src('*.jade')
        .pipe(plugins.jade({ pretty: true }))
        .pipe(gulp.dest('dist/'))
        .pipe(plugins.notify({ message: 'Templates task complete '}));
});

gulp.task('styles', function() {
    return plugins.sass('src/styles/**/*.scss', { style: 'expanded'})
        .pipe(plugins.autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(plugins.notify({ message: 'Styles task complete '}));
});

gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.notify({ message: "Scripts task complete" }));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(plugins.notify({ message: 'Images task complete' }));
});

gulp.task('svg', function() {
    return gulp.src('src/svg/**/*')
        .pipe(plugins.svgmin())
        .pipe(gulp.dest('dist/assets/svg/'))
        .pipe(plugins.notify({ message: 'SVG task complete' }));
});

gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('templates', 'styles', 'scripts', 'images', 'svg');
});

gulp.task('watch', function() {
    //Create LiveReload server
    livereload.listen();

    // Watch .jade files
    gulp.watch('*.jade', ['templates']);

    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);

    //Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

    // Watch svg files
    gulp.watch('src/svg/**/*', ['svg']);

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);
});