import React from 'react';
import MovieItem from '../src/components/MovieItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<MovieItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
