const chalk = require('chalk');

module.exports = data => {
	const len = isSameHour(data) ? 10 : 19;
	console.info(chalk`{yellow.underline Date${' '.repeat(len - 4)}} {blue.underline Value (kWh)}`);
	for (const line of data) {
		console.info(chalk`{yellow ${line.date.substr(0, len)}} {blue ${line.value}}`);
	}
};

function isSameHour(data) {
	const firstHour = data.length > 0 ? data[0].date.substr(11, 8) : '';
	console.log(firstHour);
	for (const line of data) {
		if (line.date.substr(11, 8) !== firstHour) {
			return false;
		}
	}
	return true;
}
