/* eslint-disable no-underscore-dangle */
import express from 'express';
import Restoraunt from '../models/Restoraunt.js';
import Review from '../models/Review.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const restaurants = await Restoraunt.find().populate('resReviews');
      res.json(restaurants);
    } catch (error) {
      res.json('smth no good').status(404);
    }
  });

router.route('/review')
  .post(async (req, res) => {
    try {
      const { author, review, id } = req.body;
      console.log(author, review, id);
      const newReview = new Review({
        author,
        content: review,
      });
      await newReview.save();
      const rest = await Restoraunt.findOne({ _id: id });
      rest.resReviews.push(newReview._id);
      await rest.save();
      const restaurants = await Restoraunt.find().populate('resReviews');
      res.json(restaurants);
    } catch (error) {
      res.json('smth no good').status(404);
    }
  });

export default router;
