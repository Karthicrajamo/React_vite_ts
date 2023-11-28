import React from "react";
import { z } from "zod";
import category from "../ExpenseCategory";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MouseEvent } from "react";

const schema = z.object({
	description: z.string().min(3).max(50),
	amount: z.number().min(0.001).max(100000),
	category: z.enum(category),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
	list: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ list }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<>
			<form
				onSubmit={handleSubmit((data) => {
					list(data), reset();
				})}
			>
				<div className="mb-3">
					<label htmlFor="description" className="form-lable">
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
						type="number"
						className="form-control"
					/>
					{errors.amount && (
						<p className="text-danger">{errors.amount.message}</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="category" className="form-lable">
						Category
					</label>
					<select {...register("category")} className="form-list" id="">
						<option value=""></option>
						{category.map((e) => (
							<option value={e} key={e}>
								{e}
							</option>
						))}
					</select>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</>
	);
};

export default ExpenseForm;
