import mongoose from 'mongoose';

const Review = mongoose.model('review', {
  author: String,
  content: String,
});

export default Review;
