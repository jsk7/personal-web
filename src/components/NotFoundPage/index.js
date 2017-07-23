import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <h4>
        A wild 404 appeared!
      </h4>
      <Link to="/"> Volver a la home </Link>
    </div>
  );
};

export default NotFoundPage;
