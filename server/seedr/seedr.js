import mongoose from 'mongoose';
import faker from 'faker';
import Restaurant from '../models/Restoraunt.js';
import Review from '../models/Review.js';

mongoose.connect('mongodb://localhost:27017/yelp', { useNewUrlParser: true, useUnifiedTopology: true });

async function addRest(count) {
  for (let i = 0; i < count; i += 1) {
    const resName = await faker.company.companyName();
    const resRating = Math.floor(Math.random() * 10);
    const resImgUrl = await faker.image.food();
    const resDescription = await faker.lorem.paragraph();

    const restaurant = new Restaurant({
      resName,
      resRating,
      resImgUrl,
      resDescription,
    });

    for (let j = 0; j < resRating; j += 1) {
      const author = await faker.internet.email();
      const content = await faker.lorem.paragraph();
      const review = new Review({
        author,
        content,
      });
      review.save();
      restaurant.resReviews.push(review._id);
    }
    await restaurant.save();
  }
  mongoose.connection.close();
}

// addRest(10);
