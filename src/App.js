import React from 'react';
import Content from './content/Content';
import AppHeader from './Header/AppHeader';
import MenuDrawer from './content/MenuDrawer';

function App(props) {
  const { data } = props;
  const [tabValue, changeValue] = React.useState(0);
  const [drawerOpen, changeDrawerOpen] = React.useState(false);
  const tabNames = data.map(category => category.name);
  return (
    <div className="App">
      <AppHeader changeDrawerOpen={changeDrawerOpen} tabNames={tabNames} tabValue={tabValue} changeValue={changeValue} />
      <Content data={data[tabValue]}/>
      <MenuDrawer tabNames={tabNames} open={drawerOpen} changeDrawerOpen={changeDrawerOpen} tabValue={tabValue} changeValue={changeValue} />
    </div>
  );
}

export default App;
