import React from 'react';
import ListDivider from '../src/components/ListDivider';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListDivider />).toJSON();
    expect(tree).toMatchSnapshot();
});
