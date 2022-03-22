const express = require('express');
const router = express.Router();
const MASTER_PASSWORD = 'xyz456';

let waitingUsers = [];
let selectedUsers = [];

router.get('/users', (req, res) => {
  res.json({ users: waitingUsers });
})

router.post('/players', (req, res) => {
  const { usernames } = req.body;
  selectedUsers.push(usernames);
});

router.get('/invitation', (req, res) => {
  const { username } = req.query;
  res.json({ invited: !!selectedUsers.includes(username) });
});

router.get('/get_password', (req, res) => {
  res.json({ password: MASTER_PASSWORD });
});

router.post('/user', (req, res) => {
  const { username } = req.body[0];
  waitingUsers.push(username);
  res.json({ message: 'Successfully submitted user' });
});

module.exports = router;