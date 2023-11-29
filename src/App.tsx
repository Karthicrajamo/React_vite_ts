import React, { useEffect, useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ProductList from "./ProductList";
import axios, { AxiosError, CanceledError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface User {
	id: number;
	title: string;
}

const schema = z.object({
	title: z.string(),
});

type addUserFormData = z.infer<typeof schema>;

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<addUserFormData>({ resolver: zodResolver(schema) });

	const onDelete = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		axios
			.delete("https://jsonplaceholder.typicode.com/posts/" + user.id)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		axios
			// .get<User[]>("http://127.0.0.1:8000/products/", {
			.get<User[]>("https://jsonplaceholder.typicode.com/posts", {
				signal: controller.signal,
			})
			.then((res) => {
				setUsers(res.data);
				// setUsers(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	// const addUser = ()

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<form
				className="form-group"
				onSubmit={handleSubmit((data) =>
					setUsers([...users, { ...data, id: users.length + 1 }])
				)}
			>
				<label htmlFor="addUser" className="form-label">
					Add new User
				</label>
				<input
					{...register("title")}
					id="title"
					type="text"
					className="form-control mb-3"
				/>
				<button className="btn btn-primary mb-3">Add</button>
			</form>
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.title}
						<button
							className="btn btn-outline-danger"
							onClick={() => onDelete(user)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
