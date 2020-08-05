import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos';

describe('UserRepos component', () => {
  it('renders UserRepos', () => {
    const wrapper = shallow(<UserRepos />);
    expect(wrapper).toMatchSnapshot();
  });
});
