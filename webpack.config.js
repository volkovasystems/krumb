"use strict";

const webpack = require( "webpack" );
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	"entry": "./krumb.support.js",
	"resolve": {
			"descriptionFiles": [
				".bower.json",
				"bower.json",
				"package.json"
			],
			"modules": [
				"bower_components",
				"node_modules"
			],
			"mainFields": [
				"support",
				"browser",
				"module",
				"main"
			]
	},
	"module": {
			"rules": [
				{
					"enforce": "pre",
					"test": /\.support\.js$/,
					"loader": "source-map-loader"
				}
			]
	},
	"output": {
		"library": "krumb",
		"libraryTarget": "umd",
		"filename": "krumb.deploy.js"
	},
	"plugins": [
		new UglifyJsPlugin( {
				"compress": {
						"keep_fargs": true,
						"keep_fnames": true,
						"warnings": false
				},
				"comments": false,
				"sourceMap": true,
				"mangle": false
		} )
	],
	"devtool": "#inline-source-map"
};