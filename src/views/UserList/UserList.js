import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '10vh' }}
      >
        <Grid item xs={3}>
          <Typography className={classes.content} variant="h4" gutterBottom>
            Cadastro de Usuário
          </Typography>
          <form noValidate autoComplete="off">
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">Nome</InputLabel>
              <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl >
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">Sobrenome</InputLabel>
              <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl>
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
              <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl>
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">Senha</InputLabel>
              <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl>
          </form>
          <Button
            color="primary"
            variant="contained"
            className={classes.content}
          >
            Enviar
          </Button>          
        </Grid>   
      </Grid> 
      <Divider
        className={classes.divider}
      />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UserList;
