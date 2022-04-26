const express = require('express');
const router = express.Router();

router.post('/email', (req, res) => {
    const outputHtml = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

const nodemailer = require("nodemailer");
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user:'dayko864@gmail.com',
      pass: 'ubwzmlohrwugzhls', 
    },
  });
  let info = await transporter.sendMail({
    from: '"Node Project Start" <dayko864@gmail.com>',
    to: "dayko864@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: outputHtml,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

});


module.exports = router;