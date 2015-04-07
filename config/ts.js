// https://github.com/TypeStrong/grunt-ts
module.exports = {
  options: {
    comments: false,
    compile: true,
    module: "commonjs",
    sourceMap: true,
    target: "es5"
  },
  default: {
    outDir: "app/public/js",
    src: ["app/code/**/*.ts"]
  }
};
