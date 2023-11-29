import React, { useEffect, useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ProductList from "./ProductList";
import axios, { AxiosError } from "axios";

interface User {
	id: number;
	title: string;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/products/");
				setUsers(response.data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError((error as AxiosError).message);
			}
		};

		fetchData();
	}, []);

	// useEffect(() => {
	// 	axios
	// 		.get<User[]>("http://127.0.0.1:8000/products/")
	// 		// .then((res) => console.log(res.data.results));
	// 		.then((res) => setUsers(res.data.results));
	// 	// .then((res) => setUsers(res.data));
	// }, []);

	return (
		<>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
