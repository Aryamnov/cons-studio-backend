const { celebrate, Joi } = require('celebrate');

const emailValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).email(),
  }),
  headers: Joi.object().keys({
    'content-type': Joi.string().required().valid('application/json'),
  }).unknown(true),
});

module.exports = { emailValidator };
