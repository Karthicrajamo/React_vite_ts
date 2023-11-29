import React, { useEffect, useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ProductList from "./ProductList";

function App() {
	const [category, setCategory] = useState("");

	return (
		<div>
			<select
				className="form-select"
				onChange={(event) => {
					setCategory(event?.target.value);
				}}
			>
				<option></option>
				<option value="Clothing">Clothing</option>
				<option value="Household">Household</option>
			</select>
			<ProductList category={category}></ProductList>
		</div>
	);
}

export default App;
