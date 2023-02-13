const Joker = require("../models/joker.model");

module.exports.findAllJoker = (req, res) => {
  Joker.find()
    .then(allDaJoker => res.json({ jokers: allDaJoker }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findJokerRamdom = (req, res) => {
  Joker.find().limit(-1).skip((Joker.count()*Math.random())-1)
    .then(ramdomJoker => res.json({ jokers: ramdomJoker}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoker = (req, res) => {
	Joker.findOne({ _id: req.params.id })
		.then(oneSingleJoker => res.json({ joker: oneSingleJoker }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoker = (req, res) => {
  Joker.create(req.body)
    .then(newlyCreatedJoker => res.json({ joker: newlyCreatedJoker }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoker = (req, res) => {
  Joker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoker => res.json({ joker: updatedJoker }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoker = (req, res) => {
  Joker.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
