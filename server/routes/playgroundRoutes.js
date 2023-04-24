import express from 'express';
import { createPlayground, 
        getAllPlaygrounds, 
        getPlaygroundById,
        getPlaygroundByName, 
        updatePlaygroundById, 
        deletePlaygroundById } from '../controllers/playgroundController.js';

const playgroundRouter = express.Router();

playgroundRouter.post('/create', createPlayground);
playgroundRouter.get('/', getAllPlaygrounds);
playgroundRouter.get('/:id', getPlaygroundById);
playgroundRouter.get('/name/:name', getPlaygroundByName);
playgroundRouter.patch('/:id', updatePlaygroundById);
playgroundRouter.delete('/:id', deletePlaygroundById);



export default playgroundRouter;
