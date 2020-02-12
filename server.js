const http = require('http'),
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    server = http.createServer(app),
    compression = require('compression'),
    path = require('path');

const dev = app.get('env') !== 'production';

app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());

app.use(compression())
app.use(express.static(path.resolve(__dirname, 'build')))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '.build', 'index.html'));
});

app.post('/token/', (request, response) => {
      var stripe = require("stripe")("sk_test_fN5xvCN1FN5fTzqLWj5VDQ5e0077IbVpaq");

      // Token is created using Stripe.js or Checkout!
      // Get the payment token submitted by the form:
      let token = request.body.token; // Using Express
      let chargeAmount = request.body.amount;
      let description = request.body.description;

      // Charge the user's card:
      var charge = stripe.charges.create({
        amount: chargeAmount,
        currency: "usd",
        description: description,
        source: token,
      }, function(err, charge) {
        console.log("CHARGE COMPLETE!");
      });
   });

server.listen(8080, err => {
  if(err) throw err;

  console.log('Server Started!')
});
