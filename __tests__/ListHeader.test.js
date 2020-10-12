import React from 'react';
import ListHeader from '../src/components/ListHeader';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListHeader />).toJSON();
    expect(tree).toMatchSnapshot();
});
