import Playground from '../models/playgroundModel.js';

// Create a new playground
const createPlayground = async (req, res) => {
  try {
    const newPlayground = new Playground(req.body);
    await newPlayground.save();
    res.send(newPlayground);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Get all playgrounds
const getAllPlaygrounds = async (req, res) => {
  try {
    const playgrounds = await Playground.find();
    res.json(playgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single playground by id
const getPlaygroundById = async (req, res) => {
  try {
    const playground = await Playground.findById(req.params.id);
    if (!playground) {
      return res.status(404).json({ message: 'Playground not found' });
    }
    res.json(playground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single playground by name
const getPlaygroundByName = async (req, res) => {
  try {
    const playground = await Playground.findOne(req.params.name);
    if (!playground) {
      return res.status(404).json({ message: 'Playground not found' });
    }
    res.json(playground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a playground by id
const updatePlaygroundById = async (req, res) => {
  try {
    const playground = await Playground.findById(req.params.id);
    if (!playground) {
      return res.status(404).json({ message: 'Playground not found' });
    }
    Object.assign(playground, req.body);
    await playground.save();
    res.json(playground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a playground by id
const deletePlaygroundById = async (req, res) => {
  try {
    const playground = await Playground.findByIdAndDelete(req.params.id);
    if (!playground) {
      return res.status(404).json({ message: 'Playground not found' });
    }
    res.json({ message: 'Playground deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createPlayground, 
        getAllPlaygrounds, 
        getPlaygroundById,
        getPlaygroundByName, 
        updatePlaygroundById, 
        deletePlaygroundById };
