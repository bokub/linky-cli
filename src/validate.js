const BaseJoi = require('joi');
const DateExtension = require('joi-date-extensions');

const Joi = BaseJoi.extend(DateExtension);

const schema = Joi.object().keys({
	flags: Joi.object().keys({
		user: Joi.string().email().required(),
		password: Joi.string().required(),
		start: Joi.date().format('DD/MM/YYYY'),
		end: Joi.date().format('DD/MM/YYYY')
	}),
	input: Joi.array().items(Joi.string().equal('hour', 'day', 'month', 'year').required()).length(1)
}).options({stripUnknown: true});

module.exports = input => {
	const res = Joi.validate(input, schema);
	if (res.error && res.error.details && res.error.details.length > 0) {
		res.message = res.error.details[0].message;
	}
	return res;
};
