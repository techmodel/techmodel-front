import React, { useState } from 'react';
import { Phone, Person, MailOutline, Language } from '@material-ui/icons';

import * as s from './VolunteerModal.styled';

export default function VolunteerModal({ volunteer } : any) {
    return <s.VolunteerModal>
        <s.VerticalList>
            <s.PersonalDetailsContainer>
                <s.PersonalDetails>
                    <s.Username>
                        <Person fontSize='large' />{volunteer.name}
                    </s.Username>
                    <s.AdditionalField>
                        <Language/> {volunteer.languages?.join(', ')}
                    </s.AdditionalField>
                    
                    <s.AdditionalField>
                        <Phone/> {volunteer.phoneNumber}
                    </s.AdditionalField>
                    <s.AdditionalField>
                        <MailOutline/> {volunteer.emailAddress}
                    </s.AdditionalField>
                    <div>
                        <s.Header>
                            עיסוק
                        </s.Header>
                        <s.Occupation>
                            {volunteer.occupation}
                        </s.Occupation>
                    </div>
                    <div>
                        <s.Header>
                            מקום תעסוקה
                        </s.Header>
                        <s.Occupation>
                            {volunteer.employer}
                        </s.Occupation>
                    </div>
                    
                </s.PersonalDetails>
                <s.ProfilePhoto>
                    <img src={volunteer.profile ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt='1' />
                </s.ProfilePhoto>
            </s.PersonalDetailsContainer>
            {volunteer.shortDescription && <s.ShortDescription>
                <s.Header>
                    קצת עליי
                </s.Header>
                {volunteer.shortDescription}
            </s.ShortDescription>}
        </s.VerticalList>
    </s.VolunteerModal>
}
