const router = require('express').Router();

const { sendMail } = require('../controllers/email');

const { emailValidator } = require('../middlewares/validation');

router.post('/', emailValidator, sendMail);

module.exports = router;
