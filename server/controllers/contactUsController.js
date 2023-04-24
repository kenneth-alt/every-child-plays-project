// contactUsController.js

import ContactUs from '../models/contactUsModel.js';

const createEntry = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newEntry = new ContactUs({ name, email, subject, message });

    await newEntry.save();

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const entries = await ContactUs.find();

    res.status(200).json(entries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, subject, message } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Invalid ID');
    }

    const updatedEntry = { name, email, subject, message, _id: id };

    await ContactUs.findByIdAndUpdate(id, updatedEntry, { new: true });

    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Invalid ID');
    }

    await ContactUs.findByIdAndRemove(id);

    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createEntry, getEntries, updateEntry, deleteEntry };
