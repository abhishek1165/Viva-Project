const Idea = require('../models/ideaModel');

exports.addIdea = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newIdea = new Idea({ title, description });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(500).json({ message: 'Error is coming on adding the post please check your request', error: error.message });
  }
};

exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Error is coming on getting the post might be coming from database or your request', error: error.message });
  }
};
