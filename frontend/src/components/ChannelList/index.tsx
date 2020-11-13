import React from 'react';

import { Container, AddCategoryIcon, Category } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName='Chat-Livre' />
            <ChannelButton channelName='Trabalho' />
            <ChannelButton channelName='Faculdade' />
            <ChannelButton channelName='Cinema' />
            <ChannelButton channelName='Jogos' />
        </Container>
    );
}

export default ChannelList;