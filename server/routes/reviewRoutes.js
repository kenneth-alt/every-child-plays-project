import express from 'express';
import { createReview, 
        getAllReviews, 
        updateReview, 
        deleteReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

// Create a new review
reviewRouter.post('/create', createReview);

// Get all reviews for a playgorund
reviewRouter.get('/playgrounds/:playgroundId/reviews', getAllReviews);

// Update a review by ID
reviewRouter.patch('/:id', updateReview);

// Delete a review by ID
reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;
