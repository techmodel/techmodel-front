import { Dispatch, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';
import { SchoolCommunityType, SchoolType } from 'types/institution';
import { UserType } from 'types/user';
import { Language } from 'types/language';
import { District, City } from 'types/location';

function Register() {
    const location: any = useLocation();
    const [userType, setUserType] = useState<keyof typeof UserType>('volunteer');
    const [email] = useState<string>(location.state.userInfo.email);
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [phoneNum, setPhoneNum] = useState<string>();

    // principle props
    const [schoolName, setSchoolName] = useState<string>('הכנס כאן');
    const [schoolType, setSchoolType] = useState<keyof typeof SchoolType>('יסודי');
    const [schoolCommunityType, setSchoolCommunityType] = useState<keyof typeof SchoolCommunityType>('יהודית-חילונית');
    const [schoolLanguage, setSchoolLanguage] = useState<keyof typeof Language>('עברית');
    const [schoolLocation, setSchoolLocation] = useState<keyof typeof District>('מחוז מרכז');
    const [schoolCity, setSchoolCity] = useState<keyof typeof City>('חיפה');
    const [schoolAddress, setSchoolAddress] = useState<string>('כתובת כלשהי');
    const [schoolRelatedProg, setSchoolRelatedProg] = useState<string>('אנערף');

    // volunteer props
    const [companyName, setCompanyName] = useState<string>('חברה חרטא');

    // director props
    const [volunteeringProgramName, setVolunteeringProgramName] = useState<string>('תוכנית התנדבות כלשהי');

    const setValue = (setFunc: Dispatch<any>, value: any) => {
        setFunc(value)
    }

    const submitForm = () => {
        // TODO: missing part
    }

    let form;
    if (userType === 'volunteer') {
        form = <div>
            <p>Company Name</p>
            <input value={companyName} onChange={e => setValue(setCompanyName, e.target.value)} />
        </div>
    }
    if (userType === 'principle') {
        form = <div>
            <p>School Name</p>
            <input value={schoolName} onChange={e => setValue(setSchoolName, e.target.value)} />
            <p>School Type</p>
            <input value={schoolType} onChange={e => setValue(setSchoolType, e.target.value)} />
            <p>School Type Community</p>
            <input value={schoolCommunityType} onChange={e => setValue(setSchoolCommunityType, e.target.value)} />
            <p>School Language</p>
            <input value={schoolLanguage} onChange={e => setValue(setSchoolLanguage, e.target.value)} />
            <p>School Location</p>
            <input value={schoolLocation} onChange={e => setValue(setSchoolLocation, e.target.value)} />
            <p>School City</p>
            <input value={schoolCity} onChange={e => setValue(setSchoolCity, e.target.value)} />
            <p>School Address</p>
            <input value={schoolAddress} onChange={e => setValue(setSchoolAddress, e.target.value)} />
            <p>School School Related Program</p>
            <input value={schoolRelatedProg} onChange={e => setValue(setSchoolRelatedProg, e.target.value)} />
        </div>
    }
    if (userType === 'director'){
        form = <div>
            <p>Volunteer Program Name</p>
            <input value={volunteeringProgramName} onChange={e => setValue(setVolunteeringProgramName, e.target.value)} />
        </div>
    }

    return (
        <div>
            

        <p>HEY!</p>
        <Select
            value={userType}
            label="סוג משתמש"
            onChange={(e) => setUserType(e.target.value as keyof typeof UserType)}
        >
            {Object.keys(UserType).filter(v => isNaN(v as any)).map(v => <MenuItem value={v}>{v}</MenuItem>)}
        </Select>

        <p>Email: {email}</p>
        <p>First Name</p>
        <input value={firstName} onChange={e => setValue(setFirstName, e.target.value)} />
        <p>Last Name</p>
        <input value={lastName} onChange={e => setValue(setLastName, e.target.value)} />
        <p>Phone Number</p>
        <input value={phoneNum} onChange={e => setValue(setPhoneNum, e.target.value)} />

        {form}

        <div>
            <button onClick={submitForm}>
                Register
            </button>
        </div>
        </div>
    );
}

export default Register;