import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(process.env.MAILER);

export function mail(to, subject, text, body) {
  const mailOptions = {
    from: '<webdevdamien@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plaintext body
    // html: body // html body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) return console.log(error);


    return console.log(info);
  });
}

export function mailQuoteRequest(email, model) {
  mail('djtouchette1993@gmail.com', 'New Quote', 'New Quote from: ' + email + ' ' + model );
}

export { mailQuoteRequest, mail }
