import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CategoryItem = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.container}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
});

export default CategoryItem;
