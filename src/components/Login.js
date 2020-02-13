import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import LoginStyle from './../style/LoginStyle.js'

const Login = () => {

	const classes = LoginStyle();
	const history = useHistory();

	const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

	let valForm = () => {
    return user.length > 0 && pass.length > 0
	}
	
	let httpLoginRequest = (event) => {
		history.push("/dashboard")
  	event.preventDefault();
	}
	
	useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    console.log("OIOIOIOI")
  });

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Acesso ao App
        </Typography>
				<form className={classes.form} noValidate
					onSubmit={httpLoginRequest}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={e => setUser(e.target.value)}
					/>
					<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
						id="password"
						onChange={e => setPass(e.target.value)}
            autoComplete="current-password"
          />
					<FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
					<Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
						className={classes.submit}
						disabled={!valForm()}
          >
            Sign In
          </Button>
				</form>
			</div>
		</Container>
	)
}

export default Login;