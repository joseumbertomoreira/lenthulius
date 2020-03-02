import React from 'react';
import clsx from 'clsx';

import { Divider, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { SidebarNav } from './components';

const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'Users',
    href: '/users',
    icon: <PeopleIcon />
  },
  {
    title: 'Products',
    href: '/products',
    icon: <ShoppingBasketIcon />
  },
];

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
	const { open, variant, onClose, className, ...rest } = props;

	const classes = useStyles();

	return (
		<Drawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div
				{...rest}
        className={clsx(classes.root, className)}
			>	
				<Divider className={classes.divider} />
				<SidebarNav
          className={classes.nav}
          pages={pages}
        />
			</div>
		</Drawer>
	)
}

export default Sidebar;