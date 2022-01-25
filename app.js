const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

let walletAddresses = [];
app.get('/', (req, res) => {
  res.send(walletAddresses)
})
app.get('/uploadWallet', function(req, res) {
  let wallet = req.query.wallet;
  walletAddresses.push(wallet);
  res.send(walletAddresses);

  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})