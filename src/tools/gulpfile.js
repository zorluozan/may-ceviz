const {
  task
} = require('gulp');

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  sass = require('gulp-sass'),
  nop = require('gulp-nop'),
  babelenv = require('babel-preset-env'),
  fileinclude = require('gulp-file-include'),
  merge = require('merge-stream'),
  htmlbeautify = require('gulp-html-beautify'),
  sassGlob = require('gulp-sass-glob'),
  strip_comments = require('gulp-strip-json-comments'),
  connect = require('gulp-connect')
  watch = require('gulp-watch'),
  convertWebp = require('gulp-webp'),
  rename = require('gulp-rename'),
  once = require('gulp-once'),
  os = require('os'),
  open = require('gulp-open'),
  util = require("gulp-util"),
  fileList = require('gulp-filelist'),
  modifyFile = require('gulp-modify-file'),
  argv = require('yargs').argv,
  imageResize = require('gulp-image-resize'),
  inlinesource = require('gulp-inline-source');



sass.compiler = require('node-sass');

var isBuild = false;
var paths = require('./constants');
var theme = require('./theme');
var tinypngFree = require('./tinypng');
var log = console.log;
var resizeSize = argv.resizeSize || 1920;


task('clean', function (cb) {
  return gulp.src(paths.srcClean, {
      read: false,
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }));
  cb();
});

task('html-generate', function (cb) {
  return gulp.src(paths.srcHtmlPages).pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlbeautify({
      indentSize: 2
    }))
    .pipe(gulp.dest(paths.output))

  cb();
})

task('html-list', function (cb) {
  merge(
    gulp
    .src([`${paths.output}/**/*.html`])
    .pipe(fileList('../src/js/pages/pages.js', {
      relative: true
    }))
    .pipe(modifyFile((content, path, file) => {
      const start = 'var pageList = '
      return `${start}${content}`
    }))
    .pipe(gulp.dest(paths.output)),
    gulp
    .src([`${paths.output}/sayfalar.html`])
    .pipe(inlinesource())
    .pipe(gulp.dest(paths.output))
  )

  cb()
})

task('html', gulp.series('html-generate', 'html-list'))

task('connect', function (cb) {
  connect.server({
    root: [paths.output],
    livereload: true,
    host: '0.0.0.0',
    port: 8080
  })

  var options = {
    uri: 'http://localhost:8080',
    app: 'chrome'
  };

  gulp.src(`${paths.output}/index.html`)
    .pipe(open(options))

  cb()
})

task('scripts', function (cb) {
  var layoutJs = gulp.src(theme.jsFiles, {
      allowEmpty: true
    })
    .pipe(plumber())
    // .pipe(isBuild ? babel({
    //   presets: [babelenv]
    // }) : nop())
    .pipe(isBuild ? uglify() : nop())
    .pipe(concat(`${paths.name}.js`))
    .pipe(gulp.dest(paths.distJs));

  var pagesJs = gulp.src(paths.srcJsPages, {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(isBuild ? babel({
      presets: [babelenv]
    }) : nop())
    .pipe(isBuild ? uglify() : nop())
    .pipe(gulp.dest(paths.distJsPages))

  var pluginsJs = gulp.src(paths.srcJsPlugins, {
      allowEmpty: true
    })
    .pipe(plumber())
    .pipe(isBuild ? babel({
      presets: [babelenv]
    }) : nop())
    .pipe(isBuild ? uglify() : nop())
    .pipe(gulp.dest(paths.distJsPlugins))

  return merge(layoutJs, pagesJs, pluginsJs);
  cb();
});

task('styles', function (cb) {
  var layoutScss = gulp.src(paths.scssFile, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCss));

  var pagesScss = gulp.src(paths.srcScssPages, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCssPages));

  var pluginsScss = gulp.src(paths.srcScssPlugins, {
      allowEmpty: true
    })
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(strip_comments({
      whitespace: false,
    }))
    .pipe(gulp.dest(paths.distCssPlugins));

  return merge(layoutScss, pagesScss, pluginsScss)
  cb();
});

task('fonts', function (cb) {
  return gulp.src(paths.srcFonts)
    .pipe(gulp.dest(paths.distFonts));
  cb();
});

task('media', function (cb) {
  return gulp.src(paths.srcMedia)
    .pipe(gulp.dest(paths.distMedia));
  cb();
});

task('convertWebp', async function (cb) {
  await new Promise(() => {
    gulp.src(paths.srcWebp, {
        allowEmpty: true
      })
      .pipe(convertWebp())
      .pipe(gulp.dest(paths.distWebp))
      .on('end', function () {
        cb()
      })
  })
})

task('tinyfyImage', async function (cb) {
  await new Promise((resolve, reject) => {
    gulp.src(paths.srcImages, {
        allowEmpty: true,
      })
      .pipe(once())
      .pipe(tinypngFree({
        force: true,
        delay: 4000,
      }))
      .pipe(gulp.dest(paths.distImages))
      .on('end', function () {
        cb();
      })
  })
})

task('minify-images', gulp.series('tinyfyImage', 'convertWebp'))

task('resize', async (cb) => {
  await new Promise((resolve, reject) => {
      gulp.src(paths.srcImages, {
          allowEmpty: true
      })
	  .pipe(once())
      .pipe(imageResize({
          width: resizeSize,
      }))
      .pipe(gulp.dest(paths.distImages))
      .on("end", () => {
          cb()
      })
  })
})

task('theme', function (cb) {
  var tasks = [];

  theme.others.forEach(el => {
    tasks.push(
      gulp.src(el.file, {
        allowEmpty: true
      })
      .pipe(gulp.dest(el.dist))
    )
  })

  return merge(tasks);

  cb();
});

task('watch', function (cb) {
  gulp.watch([paths.srcScss, paths.srcScssPages, paths.srcScssPlugins], gulp.series('styles'))
  gulp.watch([paths.srcJs, paths.srcJsPages, paths.srcJsPlugins], gulp.series('scripts'))
  gulp.watch(paths.srcMedia, gulp.series('media'))
  gulp.watch(paths.srcHtml, gulp.series('html'))

  watch(paths.output).pipe(connect.reload())
  cb()
})

task('production', function (cb) {
  isBuild = true;
  cb();
})

task('build', gulp.series('production', 'clean', 'styles', 'scripts', 'fonts', 'media','resize','theme'))

task('build-html', gulp.series('build','html'))

task('watch-html', gulp.series('clean', 'html', 'styles', 'scripts', 'fonts', 'media','theme', 'connect', 'watch'))

task('default', gulp.series('clean', 'styles', 'scripts', 'fonts', 'media', 'theme', 'watch'))