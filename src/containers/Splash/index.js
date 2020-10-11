import React from 'react';
import {View, Text} from 'react-native';

import useGenerateToken from '../../hooks/api/generateToken';

const Splash = () => {
    const [token, loading] = useGenerateToken();

    return (
        <View>
            <Text>
                {loading
                    ? 'Authorizing...'
                    : token
                    ? 'Welcome'
                    : 'Access Denied'}
            </Text>
        </View>
    );
};

export default Splash;
