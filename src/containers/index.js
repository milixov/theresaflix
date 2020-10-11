import React from 'react';

//redux
import {useSelector} from 'react-redux';

//react-navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//containers
import Home from './Home';
import Splash from './Splash';
import Movies from './Movies';

const Stack = createStackNavigator();

const Container = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {auth.token ? (
                    <>
                        <Stack.Screen name="Categories" component={Home} />
                        <Stack.Screen name="Movies" component={Movies} />
                    </>
                ) : (
                    <Stack.Screen name="Splash" component={Splash} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Container;
