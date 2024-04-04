import express from 'express';
import cors from 'cors';
import mailjet from 'node-mailjet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
