import React from 'react';
import CategoryItem from '../src/components/CategoryItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<CategoryItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
