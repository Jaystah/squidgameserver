const express = require('express');
const router = express.Router();
const MASTER_PASSWORD = 'xyz456';
router.get('/', (req, res) => {
  res.json({ message: 'Test message' })
})

router.get('/users', (req, res) => {
  res.json({usernames: ['Jay', 'Elif', 'Jazz', 'Zefan']});
})

router.get('/get_password', (req, res) => {
  res.json({ password: MASTER_PASSWORD });
});

router.post('/randompost', (req, res) => {
  console.log(req.body);
  res.json({message: 'Received'});
})
module.exports = router;