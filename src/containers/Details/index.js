import React, {useEffect} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import useGetMovieDetail from '../../hooks/api/getMovieDetail';

import {IMAGE_BASE_URL} from '../../config/enums';
const IMAGE_RESOLUTION = `${IMAGE_BASE_URL}/w500`;

import {styles} from './style';

const Details = ({route}) => {
    const [data, loading] = useGetMovieDetail(route.params.id);

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

export default Details;
