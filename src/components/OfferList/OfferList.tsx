import React from 'react';
import data from './data.json';
import Offer from '../Offer/Offer';


import * as s from './OfferList.styled';

export  default function OfferList({offers}: any) {
    return <s.OfferList>
        {data.map(offer => <Offer offer={offer} key={offer.id} />)}
    </s.OfferList>;
}