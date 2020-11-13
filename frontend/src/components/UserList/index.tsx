import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Props {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<Props> = ({
    nickname,
    isBot,
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='brunobannwart' />

            <Role>Offline - 20</Role>
            <UserRow nickname='robot' isBot />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
            <UserRow nickname='fulano' />
        </Container>
    );
}

export default UserList;