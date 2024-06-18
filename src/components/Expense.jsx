import React from "react";
// import './Expense.css';

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div className="expense">
      <p>{name}</p>
      <p>${amount}</p>
      <button onClick={() => deleteExpense(index)}>x</button>
    </div>
  );
}
