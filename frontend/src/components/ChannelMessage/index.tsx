import React from 'react';

import { Container, Avatar, Header, Content, Message } from './styles';
import Foto from '../../assets/profile.jpg';

export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
    myProfile?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot,
    myProfile
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}>
                {myProfile && <img src={Foto} alt='Foto' />}
            </Avatar>
            
            <Message>
                <Header>
                    <strong>{author}</strong>
                    {isBot && <span>Bot</span>}
                    <time>{date}</time>
                </Header>

                <Content>
                    {content}
                </Content>
            </Message>
        </Container>
    );
}

export default ChannelMessage; 