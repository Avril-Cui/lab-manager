const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'Avril_Cui@stgeorges.edu',
        pass: 'Aspect0717'
      }
    });

    const mailOptions = {
      from: 'avril_cui@stgeorges.edu',
      to: 'avrilcui17@gmail.com',
      subject: 'Hello',
      text: 'This is the body of the email.'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

sendEmail();