import { ChangeEvent, Dispatch, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import { Select, MenuItem, CircularProgress } from '@mui/material';
import { SchoolCommunityType, SchoolType } from 'types/institution';
import { UserType } from 'types/user';
import { Language } from 'types/language';
import { District, City } from 'types/location';

function Register() {
    const navigate = useNavigate();
    const location: any = useLocation();

    const [loading, setLoading] = useState<boolean>(false);
    
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

    const setToEventTragetValue = (setFunc: Dispatch<any>, event: ChangeEvent<HTMLInputElement>) => {
        setFunc(event.target.value)
    }

    const submitForm = async () => {
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:8080/api/user', {
                userType,
                email,
                firstName,
                lastName,
                phoneNum,
                schoolName,
                schoolType,
                schoolCommunityType,
                schoolLanguage,
                schoolLocation,
                schoolCity,
                schoolAddress,
                schoolRelatedProg,
                companyName,
                volunteeringProgramName,
            });
            const { userDetails, userToken } = response.data;
            localStorage.setItem("token", userToken);
            //TODO: Add userDetails to Store
            navigate(`/${userType}`)
            return
        } catch(e) {
            console.log('there was an error', e)
            // TODO: add snackbars that show an error
            // TODO: add error handling logic for cases when the user exists
            // TODO: add error handling logic for cases when there is internal server error
        }
        setLoading(false)
    }

    let form;
    if (userType === 'volunteer') {
        form = <div>
            <p>Company Name</p>
            <input value={companyName} onChange={e => setToEventTragetValue(setCompanyName, e)} />
        </div>
    }
    if (userType === 'principle') {
        form = <div>
            <p>School Name</p>
            <input value={schoolName} onChange={e => setToEventTragetValue(setSchoolName, e)} />
            <p>School Type</p>
            <input value={schoolType} onChange={e => setToEventTragetValue(setSchoolType, e)} />
            <p>School Type Community</p>
            <input value={schoolCommunityType} onChange={e => setToEventTragetValue(setSchoolCommunityType, e)} />
            <p>School Language</p>
            <input value={schoolLanguage} onChange={e => setToEventTragetValue(setSchoolLanguage, e)} />
            <p>School Location</p>
            <input value={schoolLocation} onChange={e => setToEventTragetValue(setSchoolLocation, e)} />
            <p>School City</p>
            <input value={schoolCity} onChange={e => setToEventTragetValue(setSchoolCity, e)} />
            <p>School Address</p>
            <input value={schoolAddress} onChange={e => setToEventTragetValue(setSchoolAddress, e)} />
            <p>School School Related Program</p>
            <input value={schoolRelatedProg} onChange={e => setToEventTragetValue(setSchoolRelatedProg, e)} />
        </div>
    }
    if (userType === 'director'){
        form = <div>
            <p>Volunteer Program Name</p>
            <input value={volunteeringProgramName} onChange={e => setToEventTragetValue(setVolunteeringProgramName, e)} />
        </div>
    }

    return (
        <div>
            <Select
                value={userType}
                label="סוג משתמש"
                onChange={(e) => setUserType(e.target.value as keyof typeof UserType)}
            >
                {Object.keys(UserType).filter(v => isNaN(v as any)).map(v => <MenuItem value={v}>{v}</MenuItem>)}
            </Select>

            <p>Email: {email}</p>
            <p>First Name</p>
            <input value={firstName} onChange={e => setToEventTragetValue(setFirstName, e)} />
            <p>Last Name</p>
            <input value={lastName} onChange={e => setToEventTragetValue(setLastName, e)} />
            <p>Phone Number</p>
            <input value={phoneNum} onChange={e => setToEventTragetValue(setPhoneNum, e)} />

            {form}

            {loading ?
                <CircularProgress/>
                :
                <div>
                    <button onClick={submitForm}>
                        Register
                    </button>
                </div>
            }
        </div>
    );
}

export default Register;