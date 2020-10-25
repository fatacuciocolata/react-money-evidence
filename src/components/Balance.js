import React, { useContext } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Context } from "./TransactionLibrary";

export const Balance = () => {
  const { calculateAmount } = useContext(Context);

  const totalAmount = calculateAmount();

  return (
    <div className="balance">
      <h4>
        Balanță <MdArrowDropDown />
      </h4>
      <h2>{totalAmount} RON </h2>
    </div>
  );
};
