import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './store/store.js';



import App from './components/App';
import "./scss/App.css";
import "antd/dist/antd.css"

import "./mock/mock.js"

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>

	</Provider>
	, document.getElementById('root'));
