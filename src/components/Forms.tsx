import React, { FormEvent, useRef, useState } from "react";

const forms = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const [person, setPerson] = useState({
		name: "",
		age: "",
	});

	const handle = (event: FormEvent) => {
		event.preventDefault();

		console.log(person);
	};
	return (
		<form onSubmit={handle}>
			<div className="mb-3">
				<label htmlFor="name" className="form-lable">
					Name
				</label>
				<input
					onChange={(event) =>
						setPerson({ ...person, name: event.target.value })
					}
					value={person.name}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					onChange={(event) =>
						setPerson({ ...person, age: parseInt(event.target.value) })
					}
					value={person.age}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default forms;
