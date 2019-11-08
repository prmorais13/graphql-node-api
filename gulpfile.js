const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");

const tsProject = ts.createProject("tsconfig.json");

// CÓDIGO PARA VERSÃO 4 DO GULP

scripts = () => {
	const tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(gulp.dest("dist"));
};

static = () => {
	return gulp.src(["src/**/*.json"]).pipe(gulp.dest("dist"));
};

cleans = () => {
	gulp.src("dist").pipe(clean());
};

watchs = () => {
	gulp.watch(["src/**/*.ts", "src/**/*.json"]);
};

exports.default = gulp.series(static, scripts, watchs);

// CÓDIGO PARA VERSÃO 3 DO GULP

// gulp.task("scripts", () => {
// 	const tsResult = tsProject.src().pipe(tsProject());
// 	return tsResult.js.pipe(gulp.dest("dist"));
// });

// gulp.task("static", () => {
// 	return gulp.src(["src/**/*.json"]).pipe(gulp.dest("dist"));
// });

// gulp.task("clean", () => {
// 	return gulp.src("dist").pipe(clean());
// });

// gulp.task("build", ["clean", "static", "scripts"]);
