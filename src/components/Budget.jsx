import React, { useContext } from "react";
import { ExpenseContext } from "../App";

export default function Budget() {
  const { budget, spent, remaining } = useContext(ExpenseContext);
  return (
    <div >
      <h1>My Budget Planner</h1>
      <div className="budget">
      <h2>Budget: ${budget}</h2>
      <h2>Remaining: ${remaining}</h2>
      <h2>Spent: ${spent}</h2>
      </div>
      
    </div>
  );
}
