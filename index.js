#!/usr/bin/env node
'use strict';
const meow = require('meow');
const linky = require('@bokub/linky');
const chalk = require('chalk');
const validate = require('./src/validate');

const cli = meow(`
    Usage
      $ linky <hour|day|month|year> -u <email> -p <password>

    Options
      --user        -u    Linky client area e-mail
      --password    -p    Linky client area password
      --start       -s    Start of the custom time period (DD/MM/YYYY)
      --end         -e    End of the custom time period (DD/MM/YYYY)

    Examples
      $ linky month -u me@example.com -p password123
      $ linky day -u me@example.com -p password123 -s 24/08/2018 -e 06/09/2018
`, {
	description: false,
	flags: {
		user: {type: 'string', alias: 'u'},
		password: {type: 'string', alias: 'p'},
		start: {type: 'string', alias: 's'},
		end: {type: 'string', alias: 'e'}
	}
});

async function main(i) {
	const session = await linky.login(i.flags.user, i.flags.password);
	let data;
	switch (i.input[0]) {
		case 'hour':
			data = await session.getHourlyData(i.flags);
			break;
		case 'day':
			data = await session.getDailyData(i.flags);
			break;
		case 'month':
			data = await session.getMonthlyData(i.flags);
			break;
		case 'year':
			data = await session.getYearlyData(i.flags);
			break;
		default:
			throw new Error(`Unknown resource: ${i.input[0]}`);
	}
	return data;
}

const validationResult = validate(cli);
if (validationResult.error) {
	console.error(chalk.red(validationResult.message));
	cli.showHelp();
}

main(cli).then(data => {
	console.log(data);
}).catch(err => {
	console.error(chalk.red(err));
	process.exit(1);
});
