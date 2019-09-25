import React from 'react';
import { shallow } from 'enzyme';
import MenuDrawer from '../MenuDrawer';
import Drawer from '@material-ui/core/Drawer';

describe('Menu drawer', () => {
    window.scrollTo = jest.fn();
    const props = {
        tabNames: ['tab1', 'tab2', 'tab3'],
        tabValue: 1,
        changeValue: jest.fn(),
        open: true,
        changeDrawerOpen: jest.fn()
    };
    const wrapper = shallow(<MenuDrawer {...props} />);
    it('Menu drawer renders properly', () => {
        expect(wrapper.find(Drawer).props().open).toEqual(true);
        expect(wrapper.find(Drawer).children()).toHaveLength(5);
    });
    it('Menu drawer click actions working correctly', () => {
        const menuList = wrapper.find(Drawer).children();
        menuList.at(1).simulate('click');
        expect(props.changeDrawerOpen).toHaveBeenCalledWith(false);
        menuList.at(2).simulate('click');
        expect(props.changeValue).toHaveBeenCalledWith(0);
    });
});