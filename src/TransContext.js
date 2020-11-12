const { createContext } = require("react")

const initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "BOOK"},
    {amount: -200, desc: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);