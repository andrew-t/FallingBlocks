var fs = require('fs'),
	img = require('../../img.js/img.js');

function doPath(path) {
	if (path == './build.js') return;
	if (/\/\./.test(path)) return;
	try {
		// assume is dir
		var files = fs.readdirSync(path);
		console.log('traversening ' + path);
		files.forEach(function(f) {
			doPath(path + '/' + f);
		});
	} catch (e) {
		if (e.errno == 27) {
			// was a file
			if (/\/[^\/\.][^\/]*\.js$/.test(path)) {
				console.log('gilesening ' + path);
				img.file(path, 'img/giles.png', true, true);
			} else
				console.log('ignorening ' + path);
		} else throw e;
	}
}

doPath('.');