const router = require('express').Router();

const routerEmail = require('./email');

const NotFoundError = require('../errors/not-found-err');

router.use('/', routerEmail);
router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
