const gulp = require("gulp");
const webserver = require("gulp-webserver");
gulp.task("server", () => {
    gulp.src("./web")
        .pipe(webserver({
            port: 8888,
            open: true,
            livereload: true,

        }))
})