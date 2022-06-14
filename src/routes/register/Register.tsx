import { Dispatch, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SchoolCommunityType, SchoolType } from 'types/institution';
import { UserType } from 'types/user';

function Register() {
    const location: any = useLocation();
    const [email, setEmail] = useState<string>(location.state.userInfo.email);
    const [userType, setUserType] = useState<keyof typeof UserType>();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [phoneNum, setPhoneNum] = useState<string>();

    // principle props
    const [schoolName, setSchoolName] = useState<string>('הכנס כאן');
    const [schoolType, setSchoolType] = useState<keyof typeof SchoolType>('יסודי');
    const [schoolCommunityType, setSchoolCommunityType] = useState<keyof typeof SchoolCommunityType>('יהודית-חילונית');
    const [communityType, setCommunityType] = useState<string>('');

    useEffect(() => {
        console.log(email)
    });

    const setValue = (setFunc: Dispatch<any>, value: any) => {
        setFunc(value)
    }

    let form;
    if (userType === 'volunteer') {
        form = <div></div>
    } else if (userType === 'principle') {
        form = <div></div>
    } else {
        form = <div></div>
    }

    return (
        <div>
            {form}

        <p>HEY!</p>
        <button onClick={() => setEmail("test")}>
            Click me
        </button>
        <p>Email</p>
        <input value={email} onChange={e => setValue(setEmail, e.target.value)} />
        <p>User Type</p>
        <input value={userType} onChange={e => setValue(setUserType, e.target.value)} />
        <p>First Name</p>
        <input value={firstName} onChange={e => setValue(setFirstName, e.target.value)} />
        <p>Last Name</p>
        <input value={lastName} onChange={e => setValue(setLastName, e.target.value)} />
        <p>Phone Number</p>
        <input value={phoneNum} onChange={e => setValue(setPhoneNum, e.target.value)} />
        <p>School Name</p>
        <input value={schoolName} onChange={e => setValue(setSchoolName, e.target.value)} />
        <p>School Type</p>
        <input value={schoolType} onChange={e => setValue(setSchoolType, e.target.value)} />
        <p>School Type Community</p>
        <input value={schoolCommunityType} onChange={e => setValue(setSchoolCommunityType, e.target.value)} />
        <p>Email</p>
        <input value={lastName} onChange={e => setValue(setLastName, e.target.value)} />
        <p>Email</p>
        <input value={lastName} onChange={e => setValue(setLastName, e.target.value)} />
        </div>
    );
}

export default Register;