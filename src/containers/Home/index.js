import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import useGetCategories from '../../hooks/api/getCategories';

import CategoryItem from '../../components/CategoryItem';
import ListDivider from '../../components/ListDivider';
import ListFooter from '../../components/ListFooter';
import ListEmpty from '../../components/ListEmpty';

const Home = ({navigation}) => {
    const [data, loading] = useGetCategories();

    const handleItemClick = (item) => {
        navigation.navigate('Movies', {
            id: item.id,
            name: item.name,
        });
    };

    const renderItem = ({item}) => (
        <CategoryItem title={item.name} onPress={() => handleItemClick(item)} />
    );
    const renderListDivider = () => <ListDivider />;
    const renderListFooter = () => <ListFooter />;
    const renderListEmpty = () => <ListEmpty text="No Item in the List" />;

    return (
        <View>
            {loading && <Text style={styles.loading}>Loading...</Text>}
            {!loading && data && (
                <FlatList
                    data={data.genres || []}
                    renderItem={renderItem}
                    ListEmptyComponent={renderListEmpty}
                    ListHeaderComponent={renderListFooter}
                    ItemSeparatorComponent={renderListDivider}
                    ListFooterComponent={renderListFooter}
                    keyExtractor={(item, index) =>
                        `category_${item.id || index}`
                    }
                />
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

export default Home;
