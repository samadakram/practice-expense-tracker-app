const { createContext } = require("react")

const initialTransactions = [
    {amount: 100, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);