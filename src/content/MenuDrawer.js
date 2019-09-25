import React from 'react';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import logo from '../static/marfeel_logo_rgb.svg';

export default function MenuDrawer(props){
    const { tabNames, tabValue, changeValue, open, changeDrawerOpen } = props;
    console.log('drawer open', open, tabValue);
    function handleItemClick(index){
        return () => {
            changeValue(index);
            handleDrawerClose();
        }
    }
    function handleDrawerClose(){
        window.scrollTo(0, 0);
        changeDrawerOpen(false);
    }
    const StyledIcon = withStyles({
        root:{
            position: 'absolute',
            right: '20px',
            width: '30px'
        }
    })(IconButton);
    const StyledListItem = withStyles({
        root: {
        height: '10%', 
        'border-bottom': '0.5px solid'
        }
    })(ListItem);
    return (
        <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            root: 'drawer'
        }}
      >
          <img src={logo} className="App-logo menu-logo" alt="logo" />
          <StyledIcon onClick={handleDrawerClose} edge='end' classes={{root:'close-drawer'}}>
            <ChevronLeftIcon />
          </StyledIcon>
          {
              tabNames.map((name, i) => <StyledListItem key={i} 
              button onClick={handleItemClick(i)} selected={i===tabValue}>{name}</StyledListItem>)
          }
      </Drawer>
    );
}