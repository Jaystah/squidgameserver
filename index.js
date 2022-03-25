const express = require('express');
const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
  console.log('Connected to db');
})

mongoose.connection.on('error', error => {
  console.log('Error occurred', error);
})

const app = express();
const PORT = process.env.PORT || 3333;

require('./models/Games');
app.use(express.json());
app.use(require('./routes/main'));


app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
})

;(async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.ublf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.error(error)
  }
})();