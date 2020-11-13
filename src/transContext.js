import React, {createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -100, desc: "Chocolate" },
    { amount: 200, desc: "vage" },
    { amount: -50, desc: "Easy Load" }
]

export const TransContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) =>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return(
        <TransContext.Provider value={{
            transactions: state,
            addTransaction
        }} >
            {children}
        </TransContext.Provider>
    )
}