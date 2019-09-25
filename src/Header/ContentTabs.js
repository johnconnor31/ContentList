import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core';
import custom from '../static/customization.json';

const styles = {
    position: 'fixed',
    'marginTop': '50px',
    width: '100%',
    background: custom.background
}
export default function ContentTabs(props) {
    const StyledTab = withStyles({
        root:{
            'min-width': '200px',
            'font-family': custom.sectionMenu.text,
            'font-size': custom.sectionMenu['text-size']
        },
        textColorSecondary:{
            color:custom.sectionMenu.color
        }
    })(Tab);
    const { tabNames, tabValue, changeValue } = props;
    function changeTab(event, newValue) {
        changeValue(newValue);
    }
    console.log('tabs', tabNames);
    return (
        <>
            <Tabs value={tabValue} onChange={changeTab}
            style={styles}
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            textColor="secondary">
                {tabNames.map( (tabName, i) => <StyledTab key={i} label={tabName} />)}
            </Tabs>
        </>
    );
}
