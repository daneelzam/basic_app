import React, { useState } from 'react';
import { Button } from 'react-materialize';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function ReviewForm() {
  const [inputs, setInputs] = useState({ review: '' });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const author = useSelector((state) => state.user.email);
  const { review } = inputs;
  const { id } = useParams();

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/rest/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author, review, id })
    }).then((res) => res.json())
      .then((servRestList) => dispatch({ type: 'INIT_RESTLIST', payload: servRestList }))
      .catch(() => setError('Something went wrong'));
  };

  return (
        <form onSubmit={handleSubmit}>
            <label>
                Author
                <input type='text' name='author' disabled value={author}/>
            </label>
            <label>
                Review
                <input type='text' name='review' onChange={handleChange} value={review}/>
            </label>
            <Button node="button" style={{ marginRight: '5px' }} waves="light" >
                Send
            </Button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}

export default ReviewForm;
