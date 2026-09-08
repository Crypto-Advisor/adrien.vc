// Render the same React page into the static HTML served by GitHub Pages.
const fs = require('fs');
const path = require('path');
const Module = require('module');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { transformSync } = require('@babel/core');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'build/asset-manifest.json'), 'utf8'));
require.extensions['.css'] = () => {};
for (const extension of ['.png', '.svg']) {
  require.extensions[extension] = (module, filename) => {
    const url = manifest.files[`static/media/${path.basename(filename)}`];
    if (!url) throw new Error(`Missing built image: ${filename}`);
    module.exports = url;
  };
}
const filename = path.join(root, 'src/App.js');
const { code } = transformSync(fs.readFileSync(filename, 'utf8'), {
  filename, babelrc: false, configFile: false,
  presets: [require.resolve('@babel/preset-react')],
  plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
});
const appModule = new Module(filename, module);
appModule.filename = filename;
appModule.paths = Module._nodeModulePaths(path.dirname(filename));
appModule._compile(code, filename);
const markup = renderToString(React.createElement(appModule.exports.default));
const output = path.join(root, 'build/index.html');
const html = fs.readFileSync(output, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('Missing empty React root');
fs.writeFileSync(output, html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`));
console.log('Prerendered portfolio content into build/index.html');
