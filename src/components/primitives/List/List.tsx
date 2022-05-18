import { FC, ReactNode } from 'react';
import { ListContainer, ListContent } from './List.styled';

interface IProps {
    children?: ReactNode;
};

const List: FC<IProps> = ({children}) => {
    return (
        <ListContainer>
            <ListContent>
                {children}
            </ListContent>
        </ListContainer>
    )
}

export default List;
