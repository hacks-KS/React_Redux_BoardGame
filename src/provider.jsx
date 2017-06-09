import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Container from './containers/container';
import configureStore from './store/store';

const store = configureStore();
const contentEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    contentEl
);
