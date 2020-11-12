import {createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    {amount: 100, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);

let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);