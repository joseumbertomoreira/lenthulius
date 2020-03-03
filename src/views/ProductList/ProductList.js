import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';


import { ProductsToolbar, ProductCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  typo: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('Composed TextField');

  const handleChange = event => {
    setName(event.target.value);
  };

  const [products] = useState(mockData);

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
            Cadastro de produtos
          </Typography>
          <form noValidate autoComplete="off">
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">Nome</InputLabel>
              <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl >
            <FormControl className={classes.content} variant="outlined">
              <InputLabel htmlFor="component-outlined">Equipamentos</InputLabel>
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
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductList;
