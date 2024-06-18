import React, { useContext, useState, useRef } from "react";
import { ExpenseContext } from "../App";
// import './AddExpense.css';

export default function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const nameInputRef = useRef(null);

  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(name, amount);
    setName("");
    setAmount(0);
    nameInputRef.current.focus();
  };

  return (
    <div className="add-expense">
      {/* <hr /> */}
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Title"
          type="text"
          required
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
          placeholder="Amount"
          type="number"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
