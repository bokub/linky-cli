const fs = require('fs');
const getDirName = require('path').dirname;
const mkdirp = require('mkdirp');

module.exports = (data, path) => {
	if (path) {
		mkdirp.sync(getDirName(path));
		fs.writeFileSync(path, JSON.stringify(data, null, 2));
	}
};
