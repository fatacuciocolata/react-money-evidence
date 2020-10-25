import React, { useContext } from "react";
import { Context } from "./TransactionLibrary";
import { MdDeleteForever } from "react-icons/md";

export const Transaction = ({ transaction }) => {
  const { transactions, setTransactions } = useContext(Context);

  const getIndexById = (id) => transactions.findIndex((x) => x.id === id);

  // Handle delete
  const handleDelete = (id) => {
    const newTransactions = [...transactions];
    const index = getIndexById(id);
    if (index === -1) {
      console.error(
        "A intervenit o eroare la remove transaction. id inxesitent: " + id
      );
      return;
    }
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
  };

  return (
    <>
      <div
        className={
          transaction.amount > 0 ? "transaction income" : "transaction expense"
        }
      >
        <div className="name">
          {transaction.name}
          <div className="amount">{transaction.amount} RON</div>
        </div>
        <span onClick={() => handleDelete(transaction.id)} className="delete">
          <MdDeleteForever />
        </span>
      </div>
    </>
  );
};
