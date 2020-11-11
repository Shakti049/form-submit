import React from 'react';
import ReactDOM from 'react-dom';

// createStore import from redux
import { createStore } from "redux";

// bootstrap dependency import
import "bootstrap/dist/css/bootstrap.css";

// FormSubmit component import
import FormSubmit from './Pages/FormSubmit';

// redux action import
import { allReducers } from './Redux/combine';

import { Provider } from "react-redux";

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <FormSubmit />
    </Provider>,
    document.getElementById('root')
);