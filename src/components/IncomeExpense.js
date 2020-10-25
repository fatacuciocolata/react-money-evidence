import React, { useContext } from "react";
import { Context } from "./TransactionLibrary";

export const IncomeExpense = () => {
  const { transactions } = useContext(Context);
  const income = transactions.filter((transaction) => transaction.amount > 0);
  const expense = transactions.filter((transaction) => transaction.amount < 0);

  // Calculate total income
  const totalIncome = income.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
  // Calculate total expense
  const totalExpense = expense.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );

  return (
    <div className="income_expense">
      <div className="income">
        <h5>Venit</h5>
        <p>{totalIncome} RON</p>
      </div>
      <div className="expense">
        <h5>Cheltuială</h5>
        <p>{totalExpense} RON</p>
      </div>
    </div>
  );
};
