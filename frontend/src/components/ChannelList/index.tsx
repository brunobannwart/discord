import React from 'react';

import { Container, AddCategoryIcon, Category } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>
        </Container>
    );
}

export default ChannelList;