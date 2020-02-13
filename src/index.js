import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/">
				<App/>
			</Route>
			<Route path="/dashboard">
				<Dashboard/>
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
);

// serviceWorker.unregister();
