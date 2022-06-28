var paths = require("./constants");

var name = "/molped";
var nodeModules = "./node_modules/";

var jsFiles = [
  `${nodeModules}jquery//dist/jquery.min.js`,
  `${nodeModules}slick-carousel/slick/slick.min.js`,
  `${nodeModules}jquery-modal/jquery.modal.min.js`,
  `${nodeModules}inputmask/dist/jquery.inputmask.min.js`,
  `${nodeModules}inputmask/dist/bindings/inputmask.binding.js`,
  `${nodeModules}jquery-validation/dist/jquery.validate.min.js`,
  `${nodeModules}popper.js/dist/umd/popper.min.js`,
  `${nodeModules}bootstrap/dist/js/bootstrap.min.js`,

  `..${paths.js}/shared/vendors/**/*.js`,
  `..${paths.js}/shared/app.js`,
];

var others = [
  {
    file: [
      `${nodeModules}slick-carousel/slick/ajax-loader.gif`,
      `${nodeModules}slick-carousel/slick/fonts/**/*`,
    ],
    dist: paths.distFonts + "/slick",
  },
  {
    file: [`${nodeModules}/lazysizes/lazysizes.min.js`],
    dist: paths.distJsPlugins + "/lazysizes",
  },
];

module.exports = {
  name,
  jsFiles,
  others,
};
