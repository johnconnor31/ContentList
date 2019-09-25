import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

const wrapper = shallow(<App data={[]}/>);
it('renders without crashing', () => {
  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.find('AppHeader')).toHaveLength(1);
  expect(wrapper.find('Content')).toHaveLength(1);
  expect(wrapper.find('MenuDrawer')).toHaveLength(1);
});
