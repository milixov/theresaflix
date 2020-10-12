import React from 'react';
import {View, Text} from 'react-native';
import useGetMovieDetail from '../../hooks/api/getMovieDetail';

const Details = ({route}) => {
    const [data, loading] = useGetMovieDetail(route.params.id);

    return (
        <View>
            {loading && <Text>Loading...</Text>}
            {data && <Text>{JSON.stringify(data)}</Text>}
        </View>
    );
};

export default Details;
