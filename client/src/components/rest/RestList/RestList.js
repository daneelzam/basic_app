/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rest from '../Rest/Rest';
import Sort from '../Sort/Sort';

function RestList() {
  const restList = useSelector((store) => store.restList);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/rest')
      .then((res) => res.json())
      .then((servRestList) => dispatch({ type: 'INIT_RESTLIST', payload: servRestList }));
  }, [dispatch]);
  return (
        <div>
            <Sort />
            {restList ? restList.map((rest) => <Rest key={rest._id} rest= {rest}/>) : 'Loading...'}
        </div>
  );
}

export default RestList;
