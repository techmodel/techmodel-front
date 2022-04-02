import React from 'react';
import { MsalProvider} from '@azure/msal-react';
import Home from './components/Home';


const App = ({msalInstance}: any) => {
  return(
    <MsalProvider instance={msalInstance}>
      <Home />
    </MsalProvider>
  );
};

export default App;
