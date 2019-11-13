const { task, src, dest, series, watch } = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");

const tsProject = ts.createProject("tsconfig.json");

// CÓDIGO PARA VERSÃO 4 DO GULP

task("scripts", () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(dest("dist"));
});

task("static", () => {
  return src(["src/**/*.json"]).pipe(dest("dist"));
});

task("limpar", () => {
  return src("dist", { allowEmpty: true }).pipe(clean());
});

task("monitorar", () => {
  watch(
    ["src/**/*.ts", "src/**/*.json"],
    series("limpar", "static", "scripts")
  );
});

task("default", series("monitorar"));

// scripts = () => {
// 	const tsResult = tsProject.src().pipe(tsProject());
// 	return tsResult.js.pipe(dest("dist"));
// };

// static = () => {
// 	return src(["src/**/*.json"]).pipe(dest("dist"));
// };

// cleans = () => {
// 	return src("dist").pipe(clean());
// };

// build = () => {
// 	return series(cleans, static, scripts);
// };

// watches = () => {
// 	return watch(
// 		["src/**/*.ts", "src/**/*.json"],
// 		series(cleans, static, scripts)
// 	);
// };

// exports.default = watches;

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
