import React from "react";
import { Provider as TransactionProvider } from "./components/TransactionLibrary";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TransactionProvider value="test">
        <Header />
        <Balance />
        <IncomeExpense />

        <div className="container">
          <AddTransaction />
          <TransactionList />
        </div>
      </TransactionProvider>
    </div>
  );
}
