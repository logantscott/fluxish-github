/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { GithubContext } from '../hooks/githubContext';
import reducer, { initialState } from '../reducers/githubReducer';

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GithubContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
