import React, { useState, useContext } from "react";
import { Context } from "./TransactionLibrary";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { transactions, setTransactions } = useContext(Context);
  const { getNextId } = useContext(Context);

  const handleSubmit = (e) => {
    const newTransaction = [
      ...transactions,
      { name: name, amount: parseInt(amount, 10), id: getNextId() }
    ];
    setTransactions(newTransaction);
    e.preventDefault();
    setName("");
    setAmount("");
  };

  return (
    <div className="add_transaction">
      <h3>Adaugă o nouă tranzacție:</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Introdu numele:</label>
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Numele tranzactiei.."
          value={name}
          required
        />
        <br />
        <label>Introdu valoarea:</label>
        <br />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Suma in RON (+) venit (-) cheltuiala..."
          value={amount}
          required
        />
        <br />
        <button type="submit">Adaugă</button>
      </form>
    </div>
  );
};
