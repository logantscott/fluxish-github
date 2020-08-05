import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const UserRepos = ({ repositories }) => {
  const repoElements = (repositories) => repositories.map(({ id, name, description, language }) => (
    <li key={id}>
      {name},
      {description},
      {language}
    </li>
    
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

UserRepos.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string.isRequired
  }))
};

export default UserRepos;
