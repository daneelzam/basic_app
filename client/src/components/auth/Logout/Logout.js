import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/logout')
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
      });
  });
  return (
        <div>

        </div>
  );
}

export default Logout;
