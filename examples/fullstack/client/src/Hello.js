import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Hello Page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
