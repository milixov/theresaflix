import React from 'react';
import {View, Text} from 'react-native';

import useGenerateToken from '../../hooks/api/generateToken';

import {styles} from './style';

const Splash = () => {
    //login
    const [] = useGenerateToken();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>THERESAFLIX</Text>
        </View>
    );
};

export default Splash;
