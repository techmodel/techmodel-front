import React from 'react';

import LanguageIcon from '@material-ui/icons/Language';

import * as s from './Offer.styled';

export  default function Offer({offer}: any) {
    return <s.OfferContainer>
        <s.Subject>
        <s.Language>{offer.lan}<LanguageIcon fontSize={'small'} /></s.Language>
        {offer.sub}
        </s.Subject>
        <s.ProfileContainer>
            {offer.name}
            <s.ProfilePhoto>
                <img src={'https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all'}></img>
            </s.ProfilePhoto>
        </s.ProfileContainer>
    </s.OfferContainer>
}