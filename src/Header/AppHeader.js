import React from 'react';
import ContentTabs from './ContentTabs';
import useScroll from '../utils/useScroll';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../static/marfeel_logo_rgb.svg';
import custom from '../static/customization.json';

const styles = {
    'App-icons':{
        position: 'fixed',
        display: 'flex',
        width: '100%',
        background: custom.background
      },
      'menu-icon': {
        'color': custom.burgerMenu,
        'marginLeft': '20px',
        position:'fixed',
        display: 'flex'
      }
}
export default function AppHeader(props) {
    const { changeDrawerOpen, tabNames, tabValue, changeValue } = props;
    function handleDrawerOpen(){
        changeDrawerOpen(true);
    }
    const mode = useScroll();
    console.log('mode', mode);
    return (
        <header>
        {mode!=='None' && <div style={styles[ 'App-icons' ]}>
        <IconButton
            aria-label="open drawer"
            style={styles['menu-icon']}
            onClick={handleDrawerOpen}
            edge="start" >
          <MenuIcon />
          </IconButton>
        <img src={logo} className='App-logo' alt="logo" />
        </div>
        }
        {mode==='None' && <IconButton
            aria-label="open drawer"
            style={styles['menu-icon']}
            onClick={handleDrawerOpen}
            edge="start" >
          <MenuIcon />
          </IconButton>
        }
        {mode==='All' && <ContentTabs tabNames={tabNames} tabValue={tabValue} changeValue={changeValue} />}
      </header>
    );
}