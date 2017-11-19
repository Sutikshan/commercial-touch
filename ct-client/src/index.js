import React from 'react'
import {render} from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import ctApp from './reducers/index.js'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'

const store = createStore(ctApp, composeWithDevTools(applyMiddleware(thunk)))

render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
