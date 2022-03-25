const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  rounds: {
    type: Number,
    required: true,
  },
  winPercentage: {
    type: Number,
    required: true,
  }
});

mongoose.model('Games', gameModel);