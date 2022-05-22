import InstitutionList from 'components/institution/InstitutionList';
import institutionService from 'api/institution';
import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './volunteer-page.css';

interface IProps {};

const LandingPage: FC<IProps> = () => {
    const institutions = institutionService.getAll();
    return (
        <Tabs>
            <TabList style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Tab>הרצאות</Tab>
                <Tab>מוסדות חינוך</Tab>
            </TabList>
            <TabPanel>
                הרצאות
            </TabPanel>
            <TabPanel>
                <InstitutionList institutions={institutions} />
            </TabPanel>
        </Tabs>
    )
};

export default LandingPage;
