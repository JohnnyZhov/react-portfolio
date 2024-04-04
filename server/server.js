import express from 'express';
import cors from 'cors';
import mailjet from 'node-mailjet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mailjetClient = mailjet.connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const request = mailjetClient
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "ukrainehomeland@gmail.com",
            "Name": "Portfolio Website"
          },
          "To": [
            {
              "Email": "ivan.zhovnych@gmail.com",
              "Name": "Ivan"
            }
          ],
          "Subject": "New message from your portfolio website",
          "TextPart": `From: ${email}\nMessage: ${message}`,
          "HTMLPart": `<h3>New message from ${name} (${email})</h3><br />${message}`,
          "CustomID": "WebsiteContactForm"
        }
      ]
    });

  request
    .then((result) => {
      res.status(200).json({ message: 'Email sent' });
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      res.status(500).json({message:'Error sending email'});
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
