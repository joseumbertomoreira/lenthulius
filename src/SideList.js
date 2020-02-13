import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import App from './App';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

let SideList = () => {
  const classes = useStyles();
  let history = useHistory();
  const [openUser, setOpenUser] = useState(false);  
  const [openEquipment, setOpenEquipment] = useState(false);  

  const handleClickUser = () => {
    setOpenUser(!openUser);
  };

  const handleClickEquipment = () => {
    setOpenEquipment(!openEquipment);
  };

  return (
    <div>
      <Collapse>
      </Collapse>
      <ListItem button onClick={handleClickUser}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Usuário" />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastro"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Gráfico"/>
          </ListItem>
          <ListItem button className={classes.nested}>
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
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListAltIcon/>
            </ListItemIcon>
            <ListItemText primary="Cadastro"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssessmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Gráfico"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SearchIcon/>
            </ListItemIcon>
            <ListItemText primary="Busca"/>
          </ListItem>
        </List>
      </Collapse>
    </div>    
  );

}

export default SideList;