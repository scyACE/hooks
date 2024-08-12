const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs');
const fg = require('fast-glob');
const gm = require('gray-matter');
const fse = require('fs-extra');

const generateMetaDesc = async (path) => {
  if (!fs.existsSync(path)) return;
  const mdFile = fs.readFileSync(path, 'utf-8');
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
};

const generateMetaData = async () => {
  const metaData = {
    functions: [],
  };
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await generateMetaDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metaData.functions = res.map((item) => {
      if (item.status === 'fulfilled') return item.value;
      return null;
    });
  });
  return metaData;
};

gulp.task('metadata', async () => {
  const metaData = await generateMetaData();
  await fse.writeJson('metaData.json', metaData, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metadata');
