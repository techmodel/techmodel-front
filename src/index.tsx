import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LandingPage, DirectorPage, VolunteerPage} from 'routes';
import { Main, Side, AppWrapper } from 'components/layout';
import { Content, Header } from 'components/layout/app';
import ThemeSwitchProvider from 'providers/theme/ThemeSwitchProvider';
import ThemeSwitchContext from 'providers/theme/ThemeSwitchContext';
import themes from 'providers/theme/themes';
import FilterBar from 'components/filter/bar/FilterBar';
import Navbar from 'components/navbar';
import 'react-tabs/style/react-tabs.css';
import './index.scss';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <ThemeSwitchProvider>
            <ThemeSwitchContext.Consumer>
                {
                ({theme})=> (
                    <ThemeProvider theme={themes[theme]}>
                        <AppWrapper>
                            <Header>
                                <Navbar />
                            </Header>
                            <Content>
                                <Router>
                                    <Main>
                                        <Routes>
                                            <Route path='/' element={<LandingPage />} />
                                            <Route path='/director' element={<DirectorPage />} />
                                            <Route path='/volunteer' element={<VolunteerPage />} />
                                        </Routes>
                                    </Main>
                                    <Side>
                                        <FilterBar />
                                    </Side>
                                </Router>
                            </Content>
                        </AppWrapper>
                    </ThemeProvider>
                )
                }
            </ThemeSwitchContext.Consumer>
        </ThemeSwitchProvider>
    </StrictMode>
);
