import React from "react";

interface Props {
	children: string;
}

const Alert = ({ children }: Props) => {
	return (
		<div>
			<div className="alert alert-primary" role="alert">
				{children}
			</div>
		</div>
	);
};

export default Alert;
