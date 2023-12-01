import { useEffect, useState } from "react";
import userService, { User } from "../Services/user-service";
import { CanceledError } from "../Services/api-client";

const useUser = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		const { request, cancel } = userService.getAllUsers();
		request
			.then(({ data }) => {
				setUsers(data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => cancel();
	}, []);
	return { users, error, isLoading, setUsers, setError };
};

export default useUser;
