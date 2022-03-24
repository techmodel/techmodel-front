import React from 'react';

import * as s from './VolunteerCard.styled';

export default function VolunteerCard({ volunteer } : any) {
    return <s.VolunteerCard>
        <s.ProfilePhoto>
            <img src={volunteer.profile ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt='1' />
        </s.ProfilePhoto>
        <s.Username>
            {volunteer.name}
        </s.Username>
        <s.Occupation>
            {volunteer.occupation}
            <br />
            @
            {volunteer.employer}
        </s.Occupation>
    </s.VolunteerCard>;
}
