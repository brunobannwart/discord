import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';
import Foto from '../../assets/profile.jpg';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar>
                    <img src={Foto} alt='Foto' />
                </Avatar>
                <UserData>
                    <strong>brunobannwart</strong>
                    <span>#2049</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default UserInfo;