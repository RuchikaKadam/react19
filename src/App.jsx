import { createContext, useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import Expense from "./components/Expense";
import './App.css'

export const ExpenseContext = createContext(null);

function App() {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (name, amount) => {
    const newExpenses = [...expenses, { name, amount: parseInt(amount) }];
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const deleteExpense = (index) => {
    let temp = [...expenses];
    temp.splice(index, 1);
    setExpenses(temp);
    localStorage.setItem('expenses', JSON.stringify(temp));
  };

  useEffect(() => {
    let amount = 0;
    for (let item of expenses) {
      amount += item.amount;
    }
    let rm = budget - amount;
    setSpent(amount);
    setRemaining(rm);
  }, [expenses, budget]);

  return (
    <div>
      <ExpenseContext.Provider value={{ budget, spent, remaining, addExpense }}>
        <Budget />
        <AddExpense />
        {expenses.map((item, index) => (
          <Expense
            key={index}
            amount={item.amount}
            name={item.name}
            deleteExpense={deleteExpense}
            index={index}
          />
        ))}
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
