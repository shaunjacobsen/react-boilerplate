import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './../../components/DashboardPage';

test('it should render the DashboardPage component', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});