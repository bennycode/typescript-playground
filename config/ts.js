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
    html: ["app/**/**.tpl.html"],
    outDir: "target/js",
    src: ["app/**/*.ts"],
    watch: "app"
  }
};
