const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Test message' })
})

router.get('/users', (req, res) => {
  res.json({usernames: ['Jay', 'Elif', 'Jazz', 'Zefan']});
})

module.exports = router;