import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/dashboard">
					<Navbar/>
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