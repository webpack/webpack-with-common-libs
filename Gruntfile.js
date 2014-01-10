module.exports = function(grunt) {
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");
	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.optimize.UglifyJsPlugin()
				)
			}
		},
		"webpack-dev-server": {
			start: {
				keepAlive: true,
				webpack: webpackConfig,
				publicPath: "/" + webpackConfig.output.publicPath
			}
		}
	});
	grunt.registerTask("build", ["webpack"	]);
	grunt.registerTask("default", ["webpack-dev-server"]);
};