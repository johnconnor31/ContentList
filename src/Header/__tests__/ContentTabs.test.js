import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '@material-ui/core/Tabs';
import ContentTabs from '../ContentTabs';


describe('Content tabs', () => {
    const wrapper = shallow(<ContentTabs tabNames={['tab1']} />);
    it('tabs are rendering', () =>{
        expect(wrapper.find(Tabs)).toHaveLength(1);
    });
});