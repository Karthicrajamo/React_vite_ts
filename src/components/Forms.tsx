import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z
		.string()
		.min(3, { message: "Name must contain at least 3 character(s)" }),
	age: z.number({ invalid_type_error: "Age field requires" }).min(18),
});

type formData = z.infer<typeof schema>; // Alternate for interface

const forms = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<formData>({ resolver: zodResolver(schema) });

	// console.log(useForm());
	const onClick = handleSubmit((data) => console.log(data));

	return (
		<form onSubmit={onClick}>
			<div className="mb-3">
				<label htmlFor="name" className="form-lable">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && <p className="text-danger">{errors.name.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age && <p className="text-danger">{errors.age.message}</p>}
			</div>
			<button disabled={!isValid} className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default forms;
