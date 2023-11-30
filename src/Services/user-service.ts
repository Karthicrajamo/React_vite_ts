import apiClient from "./api-client";
import { z } from "zod";

export const schema = z.object({
	title: z.string().min(3),
	slug: z.string().min(0),
	inventory: z.number(),
	unit_price: z.number({ invalid_type_error: "Enter a price" }).min(0.01),
	collection: z.number(),
});

export type addUserFormData = z.infer<typeof schema>;

export interface User {
	id: number;
	title: string;
	slug: string;
	inventory: number;
	unit_price: number;
	collection: number;
}

class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get<User[]>("/products/", {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}

	deleteUser(id: number) {
		return apiClient.delete("/products/" + id);
	}

	postUser(data: addUserFormData) {
		return apiClient.post("/products/", data);
	}

	updateUser(id: number, update: User) {
		return apiClient.put("/products/" + id, update);
	}
}

export default new UserService();
