import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../AppHeader';
import ContentTabs from '../ContentTabs';

describe('App header', () => {
    const props = {
        changeDrawerOpen: jest.fn(),
        tabNames: ['tab1','tab2','tab3'],
        tabValue: 1,
        changeValue: jest.fn()
    }
    const wrapper = shallow(<AppHeader {...props} />);

    it('App header rendering correctly', () => {
        expect(wrapper.find('.App-logo')).toHaveLength(1);
        expect(wrapper.find(ContentTabs)).toHaveLength(1);
    });
});