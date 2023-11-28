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

	const [category, setCategory] = useState("");
	const validateExpense = category
		? expense.filter((e) => e.category == category)
		: expense;
	return (
		<div>
			<div className="mb-5">
				<ExpenseForm
					onSubmit={(data) =>
						setExpense([...expense, { ...data, id: expense.length + 1 }])
					}
				></ExpenseForm>
			</div>
			<div className="mb-3">
				<ExpenseFilter onSelect={setCategory}></ExpenseFilter>
			</div>
			<ExpenseList
				expense={validateExpense}
				onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
			></ExpenseList>
		</div>
	);
}

export default App;
