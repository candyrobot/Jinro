compile('index');

function compile(JS_FILE_NAME) {
  var fs = require("fs");
  var browserify = require("browserify");
  browserify("./src/" + JS_FILE_NAME + ".js")
    .transform("babelify", {presets: [["env", "react"]]})
    .bundle()
    .pipe(fs.createWriteStream("./build/" + JS_FILE_NAME + ".js"));
}
