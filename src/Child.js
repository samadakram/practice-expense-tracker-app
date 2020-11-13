import React, { useContext, useState } from 'react';
import {TransContext} from './transContext';

function Child() {

    let {transactions, addTransaction} = useContext(TransContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event)=>{
        event.preventDefault()
        addTransaction({
            amount: newAmount,
            desc: newDesc
        })
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> %250 </h3>

            <div className="expense-container">
                <h3>INCOME <br /> $400 </h3>
                <h3>EXPENSE <br /> $200 </h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind} >
                            <span> {transObj.desc} </span>
                            <span> ${transObj.amount} </span>
                        </li>
                    )
                })}
            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" onChange={(ev)=>setDesc(ev.target.value)} placeholder="Enter Description" />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" onChange={(ev)=> setAmount(ev.target.value)} placeholder="Enter Amount" />
                </label>
                <br />
                <input type="submit" value="ADD TRANSACTION" />
            </form>
        </div>
    );
}

export default Child;