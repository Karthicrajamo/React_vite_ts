import React from "react";

interface Props {
	children: string;
	onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
	return (
		<div>
			<div
				className="alert alert-primary alert-dismissible"
				role="alert"
				onClick={onClose}
			>
				{children}
				<button type="button" className="btn-close"></button>
			</div>
		</div>
	);
};

export default Alert;
