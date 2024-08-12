const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('clean', async () => {
  await del('es/**');
  await del('lib/**');
  await del('dist/**');
});

// 生成es
gulp.task('es', () => {
  const tsProject = ts.createProject('./tsconfig.hooks.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 生成cjs
gulp.task('cjs', () => {
  return gulp
    .src(['./es/**/*'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

// 生成声明文件
gulp.task('declaration', () => {
  const tsProject = ts.createProject('./tsconfig.hooks.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('lib/')).pipe(gulp.dest('es/'));
});

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration');
