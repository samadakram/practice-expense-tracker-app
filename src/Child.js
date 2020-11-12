import React, { useContext } from 'react';
import {TransactionContext} from './TransContext';

function Child(){

    let transactions = useContext(TransactionContext);
    
    return(
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br/> $260 </h3>

            <div className="expense-container">
                <h3>INCOME <br/> $500 </h3>
                <h3>EXPENSE <br/> $240 </h3>
            </div>
            <h3>History</h3>
            <hr/>
                <ul className="transaction-list">
                    {transactions.map((transObj, ind)=>{
                        return(
                            <li>
                        <span> {transObj.desc} </span>
                        <span> {transObj.amount} </span>
                    </li>
                        )
                    })}
                </ul>
            <h3>Add new transaction</h3>
            <hr/>

            <form className="transaction-form">
                <label>
                    Enter Description <br/>
                    <input type="text" placeholder="Enter Description" required/>
                </label>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="number" placeholder="Enter Amount" required/>
                </label>
                <br/>
                <input type="submit" value="ADD TRANSACTION"/>
            </form>
        </div>
    );
}

export default Child;