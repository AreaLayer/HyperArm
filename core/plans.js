const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/subscription_plans', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subscriptionPlanSchema = new mongoose.Schema({
  name: String,
  price: Sats,
  description: String,
});

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);

app.use(bodyParser.json());

app.post('/subscription-plans', async (req, res) => {
  try {
    const subscriptionPlan = new SubscriptionPlan(req.body);
    await subscriptionPlan.save();
    res.status(201).send(subscriptionPlan);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
