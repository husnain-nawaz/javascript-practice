import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Filter from "./components/Filter";
import "./app.css"


const EXPENSE_CATEGORIES = ["Food", "Transport", "Shopping", "Bills", "Other"];
const INCOME_CATEGORIES = ["Salary", "Freelance", "Business", "Gift", "Other"];
const ALL_CATEGORIES = [...new Set([...EXPENSE_CATEGORIES, ...INCOME_CATEGORIES])];

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingExpense, setEditingExpense] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    // setExpenses([...expenses, expense]); // ya b chal sakta lakin recommended nhi ha agr aik he bar ma multiple updates a jain to state ruk jaye ge kun ky us ky passoldvlue ho ge na ky current jo prev sy function bna ky he mil sakti ha - or is object ma id b nahi hoti to is liye agr ap do add kry ho new expense jo ky object han to aik ko dabany sy 2ono nahiwali del ho jain he kun ky is ma id nahi ha jo nichly ma ha or usy react ko pt anahi lagy ka kisy del krna kun ky id he nahi ha
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]); // ya date.now jo random sec sy value generate krt ha hr bar unique hoti ha - is id ko ham jab b expense bna rhy han to jo object bnta ha us sy value date sy genrate kr ky id dy raha ha object ko 
  };

  const updateExpense = (updated) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updated.id ? updated : exp))
    );
    setEditingExpense(null);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Derived state: filtered list based on category + search
  const filteredExpenses = expenses.filter((exp) => {
    const matchesCategory = filterCategory === "All" || exp.category === filterCategory;
    const matchesSearch = exp.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Derived state: totals summary box logic
  const totalIncome = expenses
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalExpense = expenses
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const balance = totalIncome - totalExpense;

  const currentMonth = new Date().getMonth();
  const monthlyTotal = expenses
    .filter(
      (e) =>
        e.type === "expense" && new Date(e.date).getMonth() === currentMonth
    )
    .reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>

      <p className="text-amber-700">Summary Box</p>
      <Summary
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        balance={balance}
        monthlyTotal={monthlyTotal}
      />

      <p className="text-amber-700">Expense Form</p>
      <ExpenseForm
        expenseCategories={EXPENSE_CATEGORIES}
        incomeCategories={INCOME_CATEGORIES}
        onAdd={addExpense}
        onUpdate={updateExpense}
        editingExpense={editingExpense}
        cancelEdit={() => setEditingExpense(null)}
      />

      <p className="text-amber-700">Filter </p>
      <Filter
        categories={ALL_CATEGORIES}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <p className="text-amber-700">Expense List</p>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={setEditingExpense}
      />
    </div>
  );
}










