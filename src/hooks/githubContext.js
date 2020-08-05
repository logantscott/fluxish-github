import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useRepositories = () => {
  const { state } = useContext(AppContext);
  return state.repositories;
};

export const useUserDetails = () => {
  const { state } = useContext(AppContext);
  return state.user;
};
