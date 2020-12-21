/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Card, CardTitle
} from 'react-materialize';

function Rest({ rest }) {
  return (
  <Card actions={[<a key="1" href={`/detail/${rest._id}`}>See more information</a>]}
  header={<CardTitle image={rest.resImgUrl}>{`"${rest.resName}" raiting is: ${rest.resRating}`}</CardTitle>}
  >
    {`${rest.resDescription.slice(0, 100)}...`}
  </Card>
  );
}

export default Rest;
