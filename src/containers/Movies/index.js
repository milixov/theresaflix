import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import useDiscoverMovie from '../../hooks/api/discoverMovie';

import ListDivider from '../../components/ListDivider';
import ListFooter from '../../components/ListFooter';
import ListEmpty from '../../components/ListEmpty';
import MovieItem from '../../components/MovieItem';

const Movies = ({route, navigation}) => {
    const [data, totalPages, page, loading, setPage] = useDiscoverMovie(
        route.params.id,
    );

    useEffect(() => {
        navigation.setOptions({title: `${route.params.name} Movies`});
    }, [navigation, route]);

    const handleEndReached = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleItemClick = (item) => {
        navigation.navigate('Details', {
            id: item.id,
        });
    };

    const renderMovieItem = ({item}) => (
        <MovieItem onPress={() => handleItemClick(item)} {...item} />
    );
    const renderListDivider = () => <ListDivider />;
    const renderListFooter = () => <ListFooter />;
    const renderListEmpty = () => <ListEmpty text="No Item in the List" />;

    return (
        <View>
            {!page && loading && <Text style={styles.loading}>Loading...</Text>}
            {data && (
                <FlatList
                    data={data}
                    onEndReached={handleEndReached}
                    renderItem={renderMovieItem}
                    ListEmptyComponent={renderListEmpty}
                    ListHeaderComponent={renderListFooter}
                    ItemSeparatorComponent={renderListDivider}
                    ListFooterComponent={renderListFooter}
                    keyExtractor={(item, index) => `movie_${item.id || index}`}
                />
            )}
            {page && page >= 1 && loading && (
                <Text style={styles.loading}>Loading More</Text>
            )}
            {page === totalPages && (
                <Text style={styles.loading}>Finished</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        paddingVertical: 8,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Movies;
