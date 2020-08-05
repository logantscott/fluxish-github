import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = () => {

  const searchInput = '';
  const onChange = () => {

  };
  const onSubmit = () => {

  };


  return (
    <form className={styles.Search} onSubmit={onSubmit}>
      <input type="text" value={searchInput} onChange={onChange} />
      <button>Submit</button>
    </form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
