import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import validators from './common/validators';

import theme from './theme';

import { createBrowserHistory } from 'history';

validate.validators = {
  ...validate.validators,
  ...validators
};

const App = props => {

	const browserHistory = createBrowserHistory();

	return (
		<ThemeProvider theme={theme}>
			<Router history={browserHistory}>
				<Routes/>
			</Router>
		</ThemeProvider>
	)
}

export default App;