import React from 'react';
import { Language } from '@mui/icons-material';
import * as s from './Offer.styled';

export default function Offer({ offer }: any) {
  return (
    <s.OfferContainer>
      <s.Subject>
        <s.ProfileLanguage>
          {offer.lan}
          <Language fontSize={'small'} />
        </s.ProfileLanguage>
        {offer.sub}
      </s.Subject>
      <s.ProfileContainer>
        {offer.name}
        <s.ProfilePhoto>
          <img src={'https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all'}></img>
        </s.ProfilePhoto>
      </s.ProfileContainer>
    </s.OfferContainer>
  );
}
