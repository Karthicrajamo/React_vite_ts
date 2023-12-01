import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userService, {
	User,
	addUserFormData,
	schema,
} from "./Services/user-service";
import useUser from "./hooks/useUserHook";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<addUserFormData>({ resolver: zodResolver(schema) });

	const { users, error, isLoading, setError, setUsers } = useUser();
	// ################################# METHODS #######################################

	const onDelete = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		userService.deleteUser(user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const onSubmit = (data: addUserFormData) => {
		const originalUsers = [...users];

		setUsers([...users, { ...data, id: users.length + 1 }]);

		userService
			.postUser(data)
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

		userService.updateUser(update.id, update).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	// ################################ useEffect #######################################

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
