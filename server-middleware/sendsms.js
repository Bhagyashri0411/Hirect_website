/* eslint-disable import/no-extraneous-dependencies */
const bodyParser = require('body-parser');
const app = require('express')();
const axios = require('axios');

const headers = { 'Content-Type': 'application/json', 'api-key': process.env.SMS_API_KEY };
app.use(bodyParser.json());
app.post('/sendsms', async (req, res) => {
  const data = {
    to: `+91${req.body.mobile}`,
    sender: 'HRCTIN',
    type: 'TXN',
    source: 'API',
    template_id: '1007164613191119126',
    body: '[Hirect] Download Hirect app now: https://hirectapp.onelink.me/DNX5/8ed93b94',
  };
  const response = await axios.post(`${process.env.SMS_API_DOMAIN}/${process.env.SMS_API_SID}/messages`, data, { headers });
  res.json(response.data);
});

module.exports = app;
