import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/dashboard">
					<Dashboard/>
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
				<Redirect from='/' to="/login" />
			</Switch>
		</Router>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);