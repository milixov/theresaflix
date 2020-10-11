import React from 'react';

//navigator
import Container from './src/containers';

//store
import {Provider} from 'react-redux';
import store from './src/store';

if (__DEV__) {
    import('./src/helpers/reactotron').then(() =>
        console.log('Reactotron Configured'),
    );
}

const App = () => {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
};

export default App;
