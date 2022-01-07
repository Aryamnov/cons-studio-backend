const express = require('express');
const { PORT = 3000 } = require('./configs');
const { errors } = require('celebrate');
const routes = require('./routes');
const error = require('./middlewares/error');
const cors = require('cors');
const helmet = require('helmet');
const limiter = require('./middlewares/limiter');

const app = express();

/*let mailOptions = {
    from: 'NoResponseCons@gmail.com',
    to: 'aryamnov@gmail.com',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
};*/

//transporter.sendMail(mailOptions);

app.use(cors());
app.use(limiter);
app.use(helmet());
app.use('/', express.json());
app.use(routes);
app.use(errors());
app.use(error);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})