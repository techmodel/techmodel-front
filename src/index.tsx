import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Landing from './routes/landing';
import { Main, Side } from './components/layout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Router>
      <Main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Main>
      <Side>
        hello sidebar!
      </Side>
    </Router>
  </StrictMode>
);
