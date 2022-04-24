import React from "react";

const providerState = {
    ageHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    weightHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    heightHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    age: 0,
    height: 0,
    weight: 0
}


export const PersonalContext = React.createContext<typeof providerState>(providerState);

