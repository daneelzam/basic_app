import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  resName: String,
  resRating: Number,
  resImgUrl: String,
  resReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  resDescription: String,
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

export default Restaurant;
