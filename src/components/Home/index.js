import React from "react";

import {
    AppContainer,
    AppHeader,
    Title,
    ButtonsContainer,
    Button
} from "./styles/Home";

export default function HomeContainer({children, ...restProps}) {
    return <AppContainer {...restProps}>{children}</AppContainer>
}

HomeContainer.Header = function HomeHeader({children, ...restProps}) {
    return <AppHeader {...restProps}>{children}</AppHeader>
}

HomeContainer.Title = function HomeTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

HomeContainer.ButtonsContainer = function HomeButtonsContainer({children, ...restProps}) {
    return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
}

HomeContainer.Button = function HomeButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
