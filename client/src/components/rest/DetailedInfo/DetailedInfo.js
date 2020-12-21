/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Tabs, Tab, Card, CardTitle, CardPanel
} from 'react-materialize';
import Review from '../Review/Review';
import ReviewForm from '../ReviewForm/ReviewForm';

function DetailedInfo() {
  const { id } = useParams();
  const rest = useSelector((state) => state.restList.filter((storeRest) => storeRest._id === id))[0];
  const isAuth = useSelector((state) => state.isAuth);
  return (
      <>{ rest
        && <div>
        <Tabs className="tab-demo z-depth-1">
            <Tab active options={{
              duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Info">
                <Card
                header={<CardTitle image={rest.resImgUrl}>{`raiting is: ${rest.resRating}`}</CardTitle>}
                >
                    {`"${rest.resName}"`}
                </Card>
            </Tab>
            <Tab options={{
              duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }} title="Description"
            >
            <CardPanel className="teal">
                <span className="white-text">
                    {rest.resDescription}
                </span>
            </CardPanel>
            </Tab>
            <Tab options={{
              duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
                title="Reviews"
            >
            <div> {rest.resReviews.map((review) => <Review key={review._id} review={review} />)}</div>
            </Tab>
            <Tab options={{
              duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
                title="Give feedback"
            >
            {isAuth ? <ReviewForm /> : 'Please login'}
            </Tab>
            </Tabs>
        </div>
      }
      </>
  );
}

export default DetailedInfo;
