const mongoose = require("mongoose");

const JokerSchema = new mongoose.Schema({
	setup: String,
	punchine: String,
});

const Joker = mongoose.model("Joker", JokerSchema);

module.exports = Joker;