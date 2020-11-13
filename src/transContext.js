import React, {createContext} from 'react';

const initialTransaction = [
    { amount: 500, desc: "Cash" },
    { amount: -100, desc: "Chocolate" },
    { amount: 200, desc: "vage" },
    { amount: -50, desc: "Easy Load" }
]

export const TransContext = createContext(initialTransaction);

