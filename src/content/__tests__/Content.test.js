import React from 'react';
import { shallow } from 'enzyme';
import Content from '../Content';
import { ContentItem } from '../Content';
import mockData from '../../__tests__/mock_data.json';

describe('Content', () => {
    const wrapper = shallow(<Content data={mockData[0]} />);
    it('should render contents', () => {
        expect(wrapper.find('ContentItem')).toHaveLength(9);
    });
});

describe('Content Item', () => {
    const wrapper = shallow(<ContentItem item={mockData[0].content[0]} />);
    it('should render image, title and description', () => {
        expect(wrapper.find('.content-image')).toHaveLength(1);
        expect(wrapper.find('.description')).toHaveLength(1);
        expect(wrapper.find('.content-title')).toHaveLength(1);
    });
});