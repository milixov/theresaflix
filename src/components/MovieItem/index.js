import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {IMAGE_BASE_URL} from '../../config/enums';
const IMAGE_RESOLUTION = `${IMAGE_BASE_URL}/w500`;

const MovieItem = ({title, vote_average, poster_path, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.rate}>{vote_average}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{uri: IMAGE_RESOLUTION + poster_path}}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textWrapper: {
        padding: 24,
        flexShrink: 0,
    },
    title: {
        fontSize: 18,
        maxWidth: 200,
    },
    rate: {
        marginTop: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'orange',
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    image: {
        width: 100,
        height: '100%',
        maxWidth: 100,
        flexGrow: 1,
    },
});

export default MovieItem;
