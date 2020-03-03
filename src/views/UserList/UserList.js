import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import { UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  typo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);
  const [name, setName] = React.useState('Composed TextField');

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignContent="flex-start"
      >
        <Grid
          item
          xs={12}
        >
          <Typography className={classes.content} variant="h4" gutterBottom>
            Cadastro de Usuário
          </Typography>
        </Grid>
      </Grid>
      <Divider
        className={classes.divider}
      />
      <Grid
        item
        xs={12}        
      >
        <Grid
          container
          direction="row"
          alignContent="flex-start"
          spacing={0}
        >
          <Grid
            item
            xs={6}
          >
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
                autoFocus
                //onChange={e => setUser(e.target.value)}
              />
              <br/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="sobrenome"
                label="Sobrenome"
                name="sobrenome"
                autoComplete="sobrenome"
                autoFocus
                //onChange={e => setUser(e.target.value)}
              />
            </form>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                //onChange={e => setUser(e.target.value)}
              />
              <br/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="senha"
                label="Senha"
                name="senha"
                autoComplete="senha"
                autoFocus
                //onChange={e => setUser(e.target.value)}
              />
            </form>
          </Grid>
        </Grid>       
      </Grid>
      <Grid
        item
        xs={12}        
      >
        <Grid
          container
          direction="row"
          alignContent="flex-end"
          spacing={0}
        >
          <Grid
            item
            xs={2}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //disabled={!valForm()}
            >
              enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        className={classes.divider}
      />
    </div>
  );
};

export default UserList;
