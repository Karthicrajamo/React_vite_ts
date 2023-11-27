import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
	name: string;
	age: number;
}

const forms = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>();
	// console.log(register("name"));
	const onClick = handleSubmit((data) => console.log(data));

	return (
		<form onSubmit={onClick}>
			<div className="mb-3">
				<label htmlFor="name" className="form-lable">
					Name
				</label>
				<input
					{...register("name", { required: true, minLength: 3 })}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">Name field is required</p>
				)}
				{errors.name?.type === "minLength" && (
					<p className="text-danger">The name must be atleast 3 char</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", { required: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age?.type === "required" && (
					<p className="text-danger">The name field required</p>
				)}
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default forms;
