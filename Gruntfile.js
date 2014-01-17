module.exports = function(grunt) {
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");
	var webpackDevConfig = Object.create(webpackConfig);
	webpackDevConfig.devtool = "eval";
	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.DefinePlugin({
						"process.env": {
							"NODE_ENV": JSON.stringify("production")
						}
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				)
			},
			"build-dev": {
				devtool: "sourcemap",
				debug: true
			}
		},
		"webpack-dev-server": {
			options: {
				webpack: webpackConfig,
				publicPath: "/" + webpackDevConfig.output.publicPath
			},
			start: {
				keepAlive: true,
				webpack: {
					devtool: "eval",
					debug: true
				}
			}
		},
		watch: {
			app: {
				files: ["app/**/*", "web_modules/**/*"],
				tasks: ["webpack:build-dev"],
				options: {
					spawn: false,
				}
			}
		}
	});

	// The development server (the recommended option for development)
	grunt.registerTask("default", ["webpack-dev-server:start"]);

	// Build and watch cycle (another option for development)
	// Advantage: No server request, can run app from filesystem
	// Disadvantage: Requests are not blocked until bundle is available,
	//               can serve old app on refresh
	grunt.registerTask("dev", ["webpack:build-dev", "watch:app"]);

	// Production build
	grunt.registerTask("build", ["webpack:build"]);
};