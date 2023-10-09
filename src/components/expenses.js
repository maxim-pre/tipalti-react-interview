import { useState, useEffect } from "react";
import axios from "axios";
import ExpensesTable from "./expensesTable";

const Expenses = () => {
  const headers = {
    "Content-Type": "application/json",
    Username: "maxim.prestwich",
  };

  const [expenses, setExpenses] = useState(null);

  const getExpenses = async () => {
    try {
      const response = await axios.get(
        "https://expenses-backend-mu.vercel.app/expenses",
        { headers: headers }
      );
      setExpenses(response.data);
    } catch (error) {
      console.log("error fetching expenses", error);
    }
  };

  const renderCell = (key, val) => {
    let content = val;

    if (key === "date") {
      const dateObj = new Date(content);
      content = dateObj.toDateString();
    }

    if (key === "amount") {
      content = "£" + content.toString();
    }

    return content;
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <h1 className="expenses-header">Expenses</h1>
      {!expenses ? (
        <div>Loading...</div>
      ) : (
        <ExpensesTable expenses={expenses} renderCell={renderCell} />
      )}
    </div>
  );
};

export default Expenses;
