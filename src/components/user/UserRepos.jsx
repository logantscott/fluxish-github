import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = () => {
  const repositories = () => {
    return;
  };

  return (
    <ul>
      {repositories}
    </ul>
  );
};

UserRepos.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      language: PropTypes.string.isRequired
    })
  )
};

export default UserRepos;
