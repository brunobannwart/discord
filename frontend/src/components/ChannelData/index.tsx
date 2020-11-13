import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author='brunobannwart'
                    date='13/11/2020'
                    content='Olá, mundo!'
                    myProfile
                />

                {Array.from(Array(15).keys()).map((id) => {
                    return (
                        <ChannelMessage
                            key={id}
                            author='fulano'
                            date='13/11/2020'
                            content='Olá, mundo!'
                        />
                    );
                })}

                <ChannelMessage
                    author='robot'
                    date='13/11/2020'
                    isBot
                    hasMention
                    content={
                        <>
                            <Mention>@brunobannwart</Mention>. Olá, mundo!
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Conversar em #Chat-Livre' />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;