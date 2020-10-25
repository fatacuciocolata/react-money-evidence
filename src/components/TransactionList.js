import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { Context } from "./TransactionLibrary";

export const TransactionList = () => {
  const { transactions } = useContext(Context);

  return (
    <div>
      <h3>Istoric</h3>
      <hr />
      <div className="transactions">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
