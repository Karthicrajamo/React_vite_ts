import React, { FormEvent, useRef } from "react";

const forms = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const person = { name: "", age: 0 };

	const handle = (event: FormEvent) => {
		event.preventDefault();
		if (nameRef.current !== null) {
			person.name = nameRef.current.value;
		}
		if (ageRef.current !== null) {
			person.age = parseInt(ageRef.current.value);
		}
		console.log(person);
	};
	return (
		<form onSubmit={handle}>
			<div className="mb-3">
				<label htmlFor="name" className="form-lable">
					Name
				</label>
				<input ref={nameRef} id="name" type="text" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input ref={ageRef} id="age" type="number" className="form-control" />
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default forms;
