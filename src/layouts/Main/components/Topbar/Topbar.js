import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, IconButton, Hidden, Toolbar, Badge } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));


const Topbar = props => {
	const { className, onSidebarOpen, ...rest } = props;
	const classes = useStyles();
	
	const [notifications] = useState([]);

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}
		>
			<Toolbar>
				<div className={classes.flexGrow} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge
							color="primary"
							variant="dot"
							badgeContent={notifications.length}
						>
							<NotificationsIcon/>
						</Badge>
					</IconButton>
					<IconButton
						className={classes.signOutButton}
						color="inherit"
					>
						<InputIcon/>
					</IconButton>
				</Hidden>
				<Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
			</Toolbar>
		</AppBar>
	)
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;