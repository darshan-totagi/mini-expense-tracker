import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const addExpense = () => {
    if (amount && desc) {
      const newExpense = {
        id: Date.now(),
        amount: parseFloat(amount),
        desc,
      };
      setExpenses([newExpense, ...expenses]);
      setAmount("");
      setDesc("");
    }
  };

  const total = expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Mini Expense Tracker 💸</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <button onClick={addExpense} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
        Add Expense
      </button>

      <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {expenses.map((exp) => (
          <li key={exp.id} style={{ background: "#f1f1f1", marginTop: "10px", padding: "10px", borderRadius: "5px" }}>
            ₹{exp.amount} - {exp.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
