require('dotenv').config(); // .env dosyasından çevre değişkenlerini yükler
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors()); // CORS politikalarını etkinleştirir
app.use(express.json()); // JSON body parser'ı kullanır

// E-posta gönderme endpoint'i
app.post('/sendEmail', async (req, res) => {
  const { name, email } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Your Name" <your-email@gmail.com>',
    to: "tartilaci@gmail.com",
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}`,
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).json({ status: 'Ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});