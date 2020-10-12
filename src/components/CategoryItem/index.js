import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

const CategoryItem = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.container}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CategoryItem;
