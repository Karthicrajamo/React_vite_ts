import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import category from "../ExpenseCategory";
import { useForm } from "react-hook-form";
import errorMap from "zod/lib/locales/en";

const schema = z.object({
	description: z.string().min(3),
	amount: z
		.number({ invalid_type_error: "Amount not specified" })
		.min(0)
		.max(100_000),
	category: z.enum(category, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
	onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ExpenseFormData>({
		resolver: zodResolver(schema),
	});

	return (
		<form className="form-group" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="text"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<select id="category" {...register("category")}>
					<option></option>
					{category.map((e) => (
						<option value={e} key={e}>
							{e}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ExpenseForm;
