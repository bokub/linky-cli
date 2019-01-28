const inquirer = require('inquirer');

module.exports = async cli => {
	// Inquire step duration
	if (cli.input.length === 0) {
		const answers = await inquirer.prompt([{
			type: 'list',
			name: 'interval',
			message: 'Select a step duration',
			choices: [{value: 'hour', name: 'half hour'}, 'day', 'month', 'year']
		}]);
		cli.input = [answers.interval];
	}

	// Inquire user
	if (!cli.flags.hasOwnProperty('user')) {
		const answers = await inquirer.prompt([{
			type: 'input',
			name: 'user',
			message: 'What is your client area e-mail?'
		}]);
		cli.flags.user = answers.user;
	}

	// Inquire password
	if (!cli.flags.hasOwnProperty('password')) {
		const answers = await inquirer.prompt([{
			type: 'password',
			name: 'password',
			message: 'What is your client area password?'
		}]);
		cli.flags.password = answers.password;
	}
	return cli;
};
