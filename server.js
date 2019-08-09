const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");


var PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Define API routes here
app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Venue_leads"
);





// This section is for testing Stripe integration

// app.post("/charge", async (req, res) => {
//     try {
//       let {status} = await stripe.charges.create({
//         amount: 2000,
//         currency: "usd",
//         description: "An example charge",
//         source: req.body
//       });
  
//       res.json({status});
//     } catch (err) {
//       res.status(500).end();
//     }
//   });


  app.listen(PORT, () => console.log("Listening on port " + PORT));