import React, { useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";

function App() {
	const [expense, setExpense] = useState([
		{
			id: 1,
			description: "des 1",
			amount: 59,
			category: "Utility",
		},
		{
			id: 2,
			description: "des 2",
			amount: 59,
			category: "Utility",
		},
		{
			id: 3,
			description: "des 3",
			amount: 59,
			category: "Utility",
		},
		{
			id: 4,
			description: "des 4",
			amount: 59,
			category: "Utility",
		},
	]);

	const [selectedCategory, setSelectedCategory] = useState("");

	const visibleExpense = selectedCategory
		? expense.filter((e) => e.category === selectedCategory)
		: expense;

	return (
		<div>
			<div className="mb-3">
				<ExpenseForm
					list={(data) =>
						setExpense([...expense, { ...data, id: expense.length + 1 }])
					}
				></ExpenseForm>
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategories={(category) => setSelectedCategory(category)}
				></ExpenseFilter>
			</div>
			<ExpenseList
				expense={visibleExpense}
				onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
			/>
		</div>
	);
}

export default App;
