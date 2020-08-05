import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';

describe('UserDetails component', () => {
  it('renders UserDetails', () => {
    const wrapper = shallow(<UserDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
