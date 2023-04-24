// contactUsRoutes.js

import express from 'express';
import { createEntry, getEntries, updateEntry, deleteEntry } from '../controllers/contactUsController.js';

const contactUsRouter = express.Router();

contactUsRouter.post('/new', createEntry);
contactUsRouter.get('/', getEntries);
contactUsRouter.patch('/:id', updateEntry);
contactUsRouter.delete('/:id', deleteEntry);

export default contactUsRouter;
