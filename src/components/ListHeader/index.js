import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ListHeader = ({text}) => {
    return <Text style={styles.container}>{text}</Text>;
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ListHeader;
