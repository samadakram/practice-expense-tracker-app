import React from 'react';

function Child() {
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
                <li>
                    <span> Cash </span>
                    <span> $500 </span>
                </li>
            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text" placeholder="Enter Description" />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" placeholder="Enter Amount" />
                </label>
                <br />
                <input type="submit" value="ADD TRANSACTION" />
            </form>
        </div>
    );
}

export default Child;