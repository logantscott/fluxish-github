import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import GithubProvider from './providers/GithubProvider';

render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById('root')
);
