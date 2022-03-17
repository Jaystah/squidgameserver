const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Test message' })
})

router.get('/users', (req, res) => {
  res.json({usernames: ['Jay', 'Elif', 'Jazz', 'Zefan']});
})

router.post('/randompost', (req, res) => {
  console.log(req.body);
  res.json({message: 'Received'});
})
module.exports = router;