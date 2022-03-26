import React from 'react';

import * as s from './ItemList.styled';

const ItemList: React.FC = ({children}) => {
    return <s.ItemListContainer>
        <s.ItemListContent>
            {children}
        </s.ItemListContent>
    </s.ItemListContainer>
}

export default ItemList;
