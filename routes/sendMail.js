let nodemailer = require("nodemailer");
const sendMail = (to, subject, text) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'nqt130298@gmail.com',
            pass: 'Ninhbinh123'
        }
    });

    let mailOptions = {
        from: 'nqt130298@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // return console.log(error.message);
        }
        console.log('success');

    });
}
sendMail()
module.exports = sendMail;