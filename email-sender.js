const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: 'xxxxxxxxxx@hotmail.com',
    pass: 'xxxxxxxxxxxxxxxx'
  }
});

var mailOptions = {
  from: 'xxxxxxxxxxxxxx@hotmail.com',
  to: 'xxxxxxxxxxxx@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});