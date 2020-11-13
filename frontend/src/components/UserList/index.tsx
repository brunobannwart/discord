import React from 'react';

import { Container, Role, User, Avatar } from './styles';
import Foto from '../../assets/profile.jpg';

interface Props {
    nickname: string;
    isBot?: boolean;
    myProfile?: boolean;
}

const UserRow: React.FC<Props> = ({
    nickname,
    isBot,
    myProfile
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}>
                {myProfile && <img src={Foto} alt='Foto' />}
            </Avatar>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='brunobannwart' myProfile />

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