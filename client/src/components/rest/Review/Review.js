/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Card } from 'react-materialize';

function Review({ review }) {
  return (
            <Card actions={[<div >{review.author}</div>]} horizontal>
                {review.content}
            </Card>
  );
}

export default Review;
