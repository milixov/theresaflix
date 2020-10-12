import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {IMAGE_BASE_URL} from '../../config/enums';
const IMAGE_RESOLUTION = `${IMAGE_BASE_URL}/w500`;

import {styles} from './style';

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

export default MovieItem;
