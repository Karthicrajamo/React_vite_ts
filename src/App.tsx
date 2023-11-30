import React, { useEffect, useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ProductList from "./ProductList";
import axios, { AxiosError, CanceledError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	title: z.string().min(3),
	slug: z.string().min(0),
	inventory: z.number(),
	unit_price: z.number({ invalid_type_error: "Enter a price" }).min(0.01),
	collection: z.number(),
});

type addUserFormData = z.infer<typeof schema>;
interface User {
	id: number;
	title: string;
	slug: string;
	inventory: number;
	unit_price: number;
	collection: number;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<addUserFormData>({ resolver: zodResolver(schema) });

	// ################################# METHODS #######################################

	const onDelete = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		axios.delete("http://localhost:8000/products/" + user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const onSubmit = (data: addUserFormData) => {
		const originalUsers = [...users];

		setUsers([...users, { ...data, id: users.length + 1 }]);
		axios
			.post("http://localhost:8000/products/", data)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users])) // { data: savedUser } --> (res.data)
			// .then((data) => console.log(data))
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const onUpdate = (data: User) => {
		const originalUsers = [...users];
		const update = { ...data, title: data.title + "!" };

		setUsers(users.map((user) => (user.title === data.title ? update : user)));

		axios
			.put("http://localhost:8000/products/" + data.id, update)
			// .then(({ data: updatedData }) => console.log(updatedData))
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	// ################################ useEffect #######################################

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		axios
			// .get<User[]>("http://127.0.0.1:8000/products/", {
			.get<User[]>("http://localhost:8000/products/", {
				signal: controller.signal,
			})
			.then((res) => {
				// setUsers(res.data);
				setUsers(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	// ############################ RETURN ##############################

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}

			<form className="form-group" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="addUser" className="form-label">
					Title
				</label>
				<input
					{...register("title")}
					id="title"
					type="text"
					className="form-control mb-3"
				/>
				<label htmlFor="slug" className="form-label">
					Slug
				</label>
				<input
					{...register("slug")}
					id="slug"
					type="text"
					className="form-control mb-3"
				/>
				<label htmlFor="inventory" className="form-label">
					Inventory
				</label>
				<input
					{...register("inventory", { valueAsNumber: true })}
					id="inventory"
					type="number"
					className="form-control mb-3"
				/>
				{errors.inventory && <p>{errors.inventory.message}</p>}
				<label htmlFor="unit_price" className="form-label">
					Unit Price
				</label>
				<input
					{...register("unit_price", { valueAsNumber: true })}
					id="unit_price"
					type="number"
					className="form-control mb-3"
				/>
				<label htmlFor="collection" className="form-label">
					collection
				</label>
				<input
					{...register("collection", { valueAsNumber: true })}
					id="collection"
					type="text"
					className="form-control mb-3"
				/>
				{errors.collection && <p>{errors.collection.message}</p>}
				<button className="btn btn-primary mb-3">Add</button>
			</form>

			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.title}
						<div>
							<button
								className="btn btn-outline-dark mx-1"
								onClick={() => {
									console.log(user);
									onUpdate(user);
								}}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => onDelete(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
