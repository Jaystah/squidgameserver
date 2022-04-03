const express = require('express');
const router = express.Router();
const MASTER_PASSWORD = 'xyz456';
const mongoose = require('mongoose');
const Games = mongoose.model('Games');

let waitingUsers = [];
let selectedUsers = [];

router.get('/users', (req, res) => {
  res.json({ users: waitingUsers });
})

router.get('/invited_users', (req, res) => {
  res.json({ users: selectedUsers });
})

router.post('/players', (req, res) => {
  const { usernames } = req.body[0];
  console.log(usernames[0]);
  selectedUsers = selectedUsers.concat(usernames);
  console.log(selectedUsers);
  res.json({message: `${usernames.join(' ')} are invited`});
  waitingUsers = [];
});

router.get('/invitation', (req, res) => {
  const { username } = req.query;
  console.log(username);
  console.log(selectedUsers.includes(username));
  res.json({ invited: selectedUsers.includes(username) });
});

router.get('/get_password', (req, res) => {
  res.json({ password: MASTER_PASSWORD });
});

router.post('/user', (req, res) => {
  const { username } = req.body[0];
  waitingUsers.push(username);
  res.json({ message: 'Successfully submitted user' });
});

router.post('/add_game', async (req, res) => {
  body = req.body[0];
  if(!body.gameName || !body.rounds || !body.winPercentage) {
    return res.json({error: 'Did not receive all the fields'});
  }

  const game = new Games({
    gameName: body.gameName,
    rounds: body.rounds,
    winPercentage: body.winPercentage
  });
  let savedGame;
  try {
    savedGame = await game.save();
  } catch (error) {
    res.json({error: 'Something went wrong with saving the game'});
    return;
  }

  res.json({ message: 'Saved game' });
});

router.get('/all_games', async (req, res) => {
  console.log('Event');
  let games;
  try {
    games = await Games.find().select('-_id gameName rounds winPercentage');
  } catch (error) {
    console.error(error)
  }
  console.log(games);
  return res.json({games});
});

router.delete('/player', (req, res) => {
  const username = req.query.username;
  const idx = selectedUsers.indexOf(username);
  if (idx === -1 ) {
    return res.json({message: 'NO_USER_FOUND'});
  }
  selectedUsers.splice(idx, 1);
  res.json({message: 'Successfully deleted the user'});
});

module.exports = router;