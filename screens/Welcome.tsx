import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";

import background from "./../assets/bgs/background.png";

const WelcomeContainer = styled(Container)`
    width: 100%;
    height: 100%;
`;

const TouchableBackground = styled.TouchableHighlight`
    width: 100%;
    height: 100%;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
`;

const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <WelcomeContainer>
                <TouchableBackground onPress={(e) => onLeaveWelcomeScreen}>
                    <BackgroundImage source={ background } />
                </TouchableBackground>
            </WelcomeContainer>
        </>
    )
}

function onLeaveWelcomeScreen(): void {
    console.log(123123)
}

export default Welcome; 