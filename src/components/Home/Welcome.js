import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { session } = props;
  if (session) {
    const { person } = session;
    return (
      <div>
        <h2>
          { person.name
                ? person.name
                : 'Ops, you didnt tell your name yet'}
        </h2>
        <Link to={`/dashboard/${person.username}`}> My Geek Page</Link>
      </div>
    );
  }
  return (
    <div>
      <p>Not a rater yet, please <Link to="/register">Join Now</Link> </p>
    </div>
  );
};
