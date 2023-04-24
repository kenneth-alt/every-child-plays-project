import Review from '../models/reviewModel.js';

// Add a new review
const createReview = async (req, res) => {
  const { playgroundId, rating, comment } = req.body;
  const userId = req.user._id;

  try {
    const review = new Review({
      playground: playgroundId,
      user: userId,
      rating,
      comment,
    });

    const savedReview = await review.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews for a playground
const getAllReviews = async (req, res) => {
  const playgroundId = req.params.playgroundId;

  try {
    const reviews = await Review.find({ playground: playgroundId }).populate(
      'user',
      'username'
    );

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a review
const updateReview = async (req, res) => {
  const { rating, comment } = req.body;
  const reviewId = req.params.reviewId;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        rating,
        comment,
      },
      { new: true }
    );

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createReview, 
        getAllReviews, 
        updateReview, 
        deleteReview };
