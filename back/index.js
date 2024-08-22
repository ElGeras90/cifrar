const express = require('express');
const crypto = require('crypto-js');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/data', (req, res) => {
  const encryptedData = req.body.data;
  console.log(req.body)
  // const decipher = crypto.createDecipher('aes-256-cbc', 'aB$7pQ2*Zu9!wC8xaB$7pQ2*Zu9!wC8xnpm');
  const decryptedMessage = crypto.AES.decrypt(encryptedData, 'aB$7pQ2*Zu9!wC8xaB$7pQ2*Zu9!wC8xnpm').toString(crypto.enc.Utf8);
  // decryptedData += decipher.final('utf8');

  console.log('Datos desencriptados:', decryptedMessage);
  res.send({ message: decryptedMessage });
});


app.listen(3000, () => {
  console.log('Servidor escuchando en HTTPS');
});