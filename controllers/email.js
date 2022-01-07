const { PASSWORD } = require('../configs');
const nodemailer = require('nodemailer');

const sendMail = (req, res, next) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'NoResponseCons@gmail.com',
        pass: PASSWORD,
    },
  })

  let mailOptions = {
    from: 'NoResponseCons@gmail.com',
    to: email,
    subject: 'Вы подписаны',
    text: 'Поздравляю! Вы подписаны на рассылку от LookBook.',
    html:
      '<strong>Поздравляю!</strong> Вы подписаны на рассылку от LookBook.',
  };

  transporter.sendMail(mailOptions)
    .then((info) => res.send(info))
    .catch((err) => next(err))
};

module.exports = { sendMail };
