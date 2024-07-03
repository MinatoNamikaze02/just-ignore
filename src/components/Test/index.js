import React from "react";

import {
    TestContainer, 
    Word,
    ButtonContainer,
    Button,
    ResultContainer,
    ResultText
} from './styles/Test';

export default function Test({children, ...restProps}) {
    return <TestContainer {...restProps}>{children}</TestContainer>;
}

Test.Word = function TestWord({children, ...restProps}) {
    return <Word {...restProps}>{children}</Word>;
}

Test.ButtonContainer = function TestButtonContainer({children, ...restProps}) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
}

Test.Button = function TestButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>;
}

Test.ResultContainer = function TestResultContainer({children, ...restProps}) {
    return <ResultContainer {...restProps}>{children}</ResultContainer>;
}

Test.ResultText = function TestResultText({children, ...restProps}) {
    return <ResultText {...restProps}>{children}</ResultText>;
}
