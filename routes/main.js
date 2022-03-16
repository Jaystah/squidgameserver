const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'jay is homo' })
})

module.exports = router;