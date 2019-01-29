const fs = require('fs');
const getDirName = require('path').dirname;
const mkdirp = require('mkdirp');

module.exports = async (data, path) => {
	await mkdirp(getDirName(path));
	fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
