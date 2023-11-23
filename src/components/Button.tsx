import React from "react";

interface Props {
	children: string;
}

const Button = ({ children }: Props) => {
	return (
		<div>
			<button type="button" className="btn btn-dark">
				{children}
			</button>
		</div>
	);
};

export default Button;
