const path = require('path');
module.exports = {
	pages: {
		home: {
			entry: './src/pages/home/main',
			template: './public/index.html',
			filename: 'home.html',
		},
		login: {
			entry: './src/pages/login/main',
			template: './public/index.html',
			filename: 'login.html',
		}
	},
	css: {
		loaderOptions: {
			sass: {

			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', path.resolve('src'));
	}
};