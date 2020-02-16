import React, { useState } from 'react'

import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Style from './Style'

/*
<CadastroUser/>
<GraficoUser/>
<BuscaUser/>
<CadastroEquipamento/>
<GraficoEquipamento/>
<BuscaEquipamento/>
*/


const routes = [
  {
    path: "/dashboard/user/cadastro",
    exact: true,
    main: () => <h1>aaaaaaa</h1>
  },
  {
    path: "/dashboard/user/graficos",
    main: () => <h1>aaaaaaa</h1>
  },
  {
    path: "/dashboard/user/busca",
    main: () => <h1>aaaaaaa</h1>
	},
	{
    path: "/dashboard/equipment/cadastro",
    main: () => <h1>aaaaaaa</h1>
  },
  {
    path: "/dashboard/equipment/graficos",
    main: () => <h1>aaaaaaa</h1>
  },
  {
    path: "/dashboard/equipment/busca",
    main: () => <h1>aaaaaaa</h1>
  }
];

const SideBar = () => {

	const classes = Style();

	const [openUser, setOpenUser] = useState(false);  
  const [openEquipment, setOpenEquipment] = useState(false);  

	const handleClickUser = () => {
    setOpenUser(!openUser);
	};
	
	const handleClickEquipment = () => {
    setOpenEquipment(!openEquipment);
  };

	return (
		<List>
			<ListItem button onClick={handleClickUser}>
				<ListItemIcon>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText primary="Usuário" />
				{openUser ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={openUser} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/user/cadastro"
					>
						<ListItemIcon>
							<ListAltIcon />
						</ListItemIcon>
						<ListItemText primary="Cadastro"/>
					</ListItem>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/user/graficos"
					>
						<ListItemIcon>
							<AssessmentIcon />
						</ListItemIcon>
						<ListItemText primary="Gráfico"/>
					</ListItem>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/user/busca"
					>
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
						<ListItemText primary="Busca"/>
					</ListItem>
				</List>
			</Collapse>
			<ListItem button onClick={handleClickEquipment}>
				<ListItemIcon>
					<BuildIcon/>
				</ListItemIcon>
				<ListItemText primary="Equipamento" />
				{openEquipment ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={openEquipment} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/equipment/cadastro"
					>
						<ListItemIcon>
							<ListAltIcon/>
						</ListItemIcon>
						<ListItemText primary="Cadastro"/>
					</ListItem>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/equipment/graficos"
					>
						<ListItemIcon>
							<AssessmentIcon/>
						</ListItemIcon>
						<ListItemText primary="Gráfico"/>
					</ListItem>
					<ListItem button className={classes.nested}
						component={Link} to="/dashboard/equipment/busca"
					>
						<ListItemIcon>
							<SearchIcon/>
						</ListItemIcon>
						<ListItemText primary="Busca"/>
					</ListItem>
				</List>
			</Collapse>
		</List>
	)

}

export default SideBar;