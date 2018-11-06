const chalk = require('chalk');

module.exports = data => {
	const len = isSameHour(data) ? 10 : 19;
	const max = Math.max(...data.map(x => x.value));
	const chartLength = 30;
	// Headers
	console.info(chalk`{yellow.underline Date${' '.repeat(len - 4)}} {blue.underline Value (kWh)} ` +
		chalk`{cyan.underline Chart${' '.repeat(chartLength - 5)}}`);

	for (const line of data) {
		console.info(chalk.yellow(line.date.substr(0, len)) + ' ' +
			chalk.blue(line.value) + ' '.repeat(12 - (line.value === null ? 4 : line.value.toString().length)) +
            chalk.cyan('■'.repeat((max && line.value) ? Math.ceil(chartLength * line.value / max) : 0)));
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
