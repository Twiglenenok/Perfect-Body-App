import React from "react";

const providerState = {
    ageHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    weightHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    heightHandler: (evt: React.ChangeEvent<HTMLInputElement>) => {},
    age: '30',
    height: '80',
    weight: '180'
}


export const PersonalContext = React.createContext<typeof providerState>(providerState);

