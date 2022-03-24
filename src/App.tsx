import React, { useState } from 'react';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return <MenuDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />;
};

export default App;
