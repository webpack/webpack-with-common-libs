var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task("build", function(callback) {
	return gulp.run("webpack", callback);
});

gulp.task("default", function(callback) {
	return gulp.run("webpack-dev-server", callback);
});


gulp.task("webpack", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack-dev-server", function(callback) {
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(webpackConfig), {
		publicPath: "/" + webpackConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});
