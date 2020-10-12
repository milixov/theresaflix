import React, {useEffect} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import useGetMovieDetail from '../../hooks/api/getMovieDetail';

import {IMAGE_BASE_URL} from '../../config/enums';
const IMAGE_RESOLUTION = `${IMAGE_BASE_URL}/w500`;

const Details = ({route}) => {
    const [data, loading] = useGetMovieDetail(route.params.id);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <ScrollView>
            {loading && <Text>Loading...</Text>}
            {data && (
                <View>
                    <Image
                        source={{uri: IMAGE_RESOLUTION + data.poster_path}}
                        style={styles.image}
                    />
                    <View style={styles.container}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.tagWrapper}>
                            {data.genres.map((item) => (
                                <Text
                                    style={styles.tag}
                                    key={`genre_${item.id}`}>
                                    {item.name}
                                </Text>
                            ))}
                        </View>
                        <Text style={styles.desc}>{data.overview}</Text>
                        <View style={styles.statistics}>
                            <View>
                                <Text style={styles.label}>Vote Average</Text>
                                <Text style={styles.value}>
                                    {data.vote_average}
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.label}>Vote Count</Text>
                                <Text style={styles.value}>
                                    {data.vote_count}
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.label}>Runtime</Text>
                                <Text style={styles.value}>{data.runtime}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

const deviceWith = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    loading: {
        paddingVertical: 8,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: deviceWith,
        height: deviceWith,
    },
    container: {
        padding: 24,
    },
    title: {
        fontSize: 24,
    },
    desc: {
        marginVertical: 16,
    },
    statistics: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: 30,
        backgroundColor: 'lightgray',
        marginVertical: 16,
    },
    label: {
        color: 'gray',
    },
    value: {
        fontSize: 18,
    },
    tagWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        color: 'white',
        backgroundColor: 'gray',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        marginRight: 4,
    },
});

export default Details;
