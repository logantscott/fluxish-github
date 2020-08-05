import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = () => {

  return (
    <>
      <img src='http://www.placekitten.com/300/300'/>
      <h2>Username</h2>
      <p>Repos: #</p>
      <p>Followers: #</p>
      <p>Following: #</p>
    </>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    repos: PropTypes.number.isRequired
  })
};

export default UserDetails;
