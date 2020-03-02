import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Login as LoginLayout } from './layouts';

import {
	Dashboard as DashboardView,
} from './views';

const Routes = () => {
	
	return (
		<Switch>
			<Redirect
				exact
        from="/"
        to="/login"
			/>
			<RouteWithLayout
				component={DashboardView}
        exact
        layout={LoginLayout}
        path="/login"
			/>
			<RouteWithLayout
				component={DashboardView}
        exact
        layout={LoginLayout}
        path="/login"
			/>
		</Switch>
	)
}

export default Routes;