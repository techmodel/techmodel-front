import { StrictMode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LandingPage, DirectorPage, VolunteerPage } from 'routes';
import { Main, Side, AppWrapper } from 'components/layout';
import { Content, Header } from 'components/layout/app';
import ThemeSwitchProvider from 'providers/theme/ThemeSwitchProvider';
import ThemeSwitchContext from 'providers/theme/ThemeSwitchContext';
import themes from 'providers/theme/themes';
import store from 'store';
import FilterBar from 'components/filter/bar/FilterBar';
import Navbar from 'components/navbar';
import 'react-tabs/style/react-tabs.css';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeSwitchProvider>
        <ThemeSwitchContext.Consumer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme]}>
              <AppWrapper>
                <Header>
                  <Navbar />
                </Header>
                <Content>
                  <Router>
                    <Main>
                      <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/director" element={<DirectorPage />} />
                        <Route path="/volunteer" element={<VolunteerPage />} />
                      </Routes>
                    </Main>
                    <Side>
                      <FilterBar />
                    </Side>
                  </Router>
                </Content>
              </AppWrapper>
            </ThemeProvider>
          )}
        </ThemeSwitchContext.Consumer>
      </ThemeSwitchProvider>
    </StoreProvider>
  </StrictMode>
);
