import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { 
	Login as LoginLayout,
	Main as MainLayout
} from './layouts';

import {
	Dashboard as DashboardView,
	ProductList as ProductListView,
  UserList as UserListView,
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
        layout={MainLayout}
        path="/dashboard"
			/>
			<RouteWithLayout
				component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
			/>
			<RouteWithLayout
				component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
			/>
		</Switch>
	)
}

export default Routes;