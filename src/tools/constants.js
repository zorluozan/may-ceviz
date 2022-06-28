const name = 'app';

// structure
const css = '/css';
const scss = '/scss';
const js = '/js';
const media = '/media';
const fonts = '/fonts';
const docs = '/docs'
const pages = '/pages';
const plugins = '/plugins';
const videos = '/video';
const images = '/img';
const html = '/html';

const output = '../../output'
const dist = output + '/dist'; // '../../output/dist'
const distJs = dist + js; // '../../output/dist/js'
const distJsPages = dist + js + pages; // '../../output/dist/js/pages'
const distJsPlugins = dist + js + plugins; // '../../output/dist/js/plugins'
const distCss = dist + css // '../../output/dist/css'
const distCssPages = dist + css + pages; // '../../output/dist/css/pages'
const distCssPlugins = dist + css + plugins; // '../../output/dist/css/plugins'
const distMedia = dist + media; // '../../output/dist/media'
const distImages = dist + media + images; // '../../output/dist/media/img'
const distWebp = dist + media + images + '/webp'; // '../../output/dist/media/img/webp'
const distFonts = dist + fonts; // '../../output/dist/fonts'
const distHtml = output; // '../../output'



// Entrypoints
const scssFile = [
    `..${css}${scss}/app.scss`,
    `!..${css}${scss}/**/_*.[scss|sass]`
];

// Sources
const sRoute = '..';
const srcScss = `${sRoute}${css}${scss}/**/*.scss`; // '../css/scss/**/*.scss'
const srcScssPages = `${sRoute}${css}${pages}/**/*.scss`; // '../css/pages/**/*.scss'
const srcScssPlugins = `${sRoute}${css}${plugins}/**/*.scss`; // '../css/plugins/**/*.scss'
const srcJs = `${sRoute}${js}/**/*.js`; // '../js/**/*.js'
const srcJsPages = `${sRoute}${js}${pages}/**/*.js`; // '../js/pages/**/*.js'
const srcJsPlugins = `${sRoute}${js}${plugins}/**/*.js`; // '../js/plugins/**/*.js'

const srcMedia = [
    `${sRoute}${media}/**/*`, // '../media/**/*'
];

const srcImages = [`${sRoute}${media}${images}/**/*.{gif,png,jpg,jpeg}`]; // '../media/img/**/*.gif,png,jpg,jpeg'

const srcFonts = `${sRoute}${fonts}/**/*.{woff,woff2,otf,ttf,gif,eot}`; // '../fonts/woff,woff2,otf,ttf,gif,eot'
const srcHtml = [`${sRoute}${html}/**/*.html`]; // '../html/**/*.html'
const srcHtmlPages = [`${sRoute}${html}${pages}/**/*.html`]; // '../html/pages/**/*.html'

const srcWebp = [
    `${distImages}/**/*.{gif,png,jpg,svg,jpeg}`, // '../output/dist/media/img/**/*.gif,png,jpg,svg,jpeg'
    `!${distWebp}/**/*.{gif,png,jpg,svg,jpeg}`, // '!!!../output/dist/media/img/webp/**/*.gif,png,jpg,svg,jpeg'
];

const srcClean = [
    `${output}/**/*.html`,
    `${distCss}/**/*`,
    `${distJs}/**/*`,
]

module.exports = {
    output,scssFile,name,
    css,scss,js,media,images,fonts,docs,pages,plugins,videos,html,
    dist,distJs,distJsPages,distJsPlugins,distCss,distCssPages,distCssPlugins,distMedia,distImages,distFonts,distHtml,distWebp,
    srcClean,srcScss,srcScssPages,srcImages,srcScssPlugins,srcJs,srcJsPages,srcJsPlugins,srcMedia,srcFonts,srcHtml,srcHtmlPages,srcWebp
}

