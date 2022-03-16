const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(require('./routes/main'));


app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
})