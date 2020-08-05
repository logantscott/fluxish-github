import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const UserRepos = ({ repositories }) => {
  const repoElements = (repositories) => repositories.map(({ id, name, description, language, url, created_at, updated_at, size }) => (
    <li key={id}>
      name: {name},
      url: {url}
      description: {description},
      langauge: {language}
      created at: {created_at},
      udpated at: {updated_at},
      size: {size}
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
    language: PropTypes.string.isRequired,
    url: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    size: PropTypes.number
  }))
};

export default UserRepos;
