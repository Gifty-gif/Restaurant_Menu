const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });
 
const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
});
 
const MenuItem = mongoose.model('MenuItem', menuSchema);
 
app.use(bodyParser.json());
 
app.get('/menu', async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});