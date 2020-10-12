import React from 'react';
import ListEmpty from '../src/components/ListEmpty';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListEmpty />).toJSON();
    expect(tree).toMatchSnapshot();
});
