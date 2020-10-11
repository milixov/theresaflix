import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ListEmpty = ({text}) => {
    return <Text style={styles.container}>{text}</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
});

export default ListEmpty;
