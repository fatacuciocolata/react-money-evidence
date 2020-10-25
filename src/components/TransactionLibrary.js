import React, { useState } from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { name: "Salariu", amount: 300, id: 1 },
    { name: "Mâncare pisici", amount: -100, id: 2 }
  ]);

  // Generate next id
  const getNextId = () => {
    let lastBigId = 0;

    transactions.map((x) => {
      if (x.id > lastBigId) {
        lastBigId = x.id;
      }
      return false;
    });

    return lastBigId + 1;
  };

  // Calculate amount array values
  const calculateAmount = () => {
    const amountArr = transactions.map((transaction) => transaction.amount);
    // Calculate Balance
    const totalAmount = amountArr.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue, 10),
      0
    );
    return totalAmount;
  };

  const providerValue = {
    transactions,
    setTransactions,
    getNextId,
    calculateAmount
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export { Context, Provider };
