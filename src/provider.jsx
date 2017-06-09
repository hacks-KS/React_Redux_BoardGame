import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Game from './containers/Game.jsx';
import configureStore from './store/store';

const store = configureStore();
const contentEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    contentEl
);
