import React from "react";

import {
    LearnContainer,
    WordList,
    WordCard, 
    WordText,
    MeaningText,
    TickButton,
    Checkmark
} from './styles/Learn';

export default function Learn({children, ...restProps}) {
    return <LearnContainer {...restProps}>{children}</LearnContainer>;
}

Learn.WordList = function LearnWordList({children, ...restProps}) {
    return <WordList {...restProps}>{children}</WordList>;
}

Learn.WordCard = function LearnWordCard({children, ...restProps}) {
    return <WordCard {...restProps}>{children}</WordCard>;
}

Learn.WordText = function LearnWordText({children, ...restProps}) {
    return <WordText {...restProps}>{children}</WordText>;
}

Learn.MeaningText = function LearnMeaningText({children, ...restProps}) {
    return <MeaningText {...restProps}>{children}</MeaningText>;
}

Learn.TickButton = function LearnTickButton({children, ...restProps}) {
    return <TickButton {...restProps}>{children}</TickButton>;
}

Learn.Checkmark = function LearnCheckmark({children, ...restProps}) {
    return <Checkmark {...restProps}>{children}</Checkmark>;
}
