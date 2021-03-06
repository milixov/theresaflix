import React from 'react';
import {Text} from 'react-native';

import {styles} from './style';

const ListEmpty = ({text}) => {
    return <Text style={styles.container}>{text}</Text>;
};

export default ListEmpty;
