import React from 'react';
import { Button } from 'react-materialize';
import { useDispatch } from 'react-redux';

function Sort() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'SORT_BY_RATING' });
  };
  return (
      <form onSubmit={handleSubmit}>
        <Button node="button" style={{ marginRight: '5px' }} waves="light" >
                Sort by Rating
            </Button>
      </form>
  );
}

export default Sort;
