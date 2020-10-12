import React from 'react';
import ListFooter from '../src/components/ListFooter';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListFooter />).toJSON();
    expect(tree).toMatchSnapshot();
});
