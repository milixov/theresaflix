import React, {useEffect} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import useDiscoverMovie from '../../hooks/api/discoverMovie';

import ListDivider from '../../components/ListDivider';
import ListFooter from '../../components/ListFooter';
import ListEmpty from '../../components/ListEmpty';
import MovieItem from '../../components/MovieItem';

const Movies = ({route, navigation}) => {
    const [
        data,
        totalPages,
        totalCount,
        page,
        loading,
        setPage,
    ] = useDiscoverMovie(route.params.id);

    useEffect(() => {
        navigation.setOptions({title: `${route.params.name} Movies`});
    }, [navigation, route]);

    const renderMovieItem = ({item}) => <MovieItem {...item} />;
    const renderListDivider = () => <ListDivider />;
    const renderListFooter = () => <ListFooter />;
    const renderListEmpty = () => <ListEmpty text="No Item in the List" />;

    return (
        <SafeAreaView>
            {data && (
                <FlatList
                    data={data}
                    renderItem={renderMovieItem}
                    ListEmptyComponent={renderListEmpty}
                    ListHeaderComponent={renderListFooter}
                    ItemSeparatorComponent={renderListDivider}
                    ListFooterComponent={renderListFooter}
                    keyExtractor={(item, index) => `movie_${item.id || index}`}
                />
            )}
        </SafeAreaView>
    );
};

export default Movies;
